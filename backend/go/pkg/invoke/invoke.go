package invoke

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"net/url"
	"os"
	"strings"
	"sync"

	"github.com/Aman-Codes/backend/go/pkg/core"
	"github.com/Aman-Codes/backend/go/pkg/log"

	"github.com/sirupsen/logrus"
)

var (
	// Enable JSON output
	jsonOutput bool = true
	// MaxDepth limits the recursion depth of visited URLs. (Set it to 0 for infinite recursion)
	maxDepth int = 1
	// The number of the maximum allowed concurrent requests of the matching domains
	concurrent int = 5
	// Delay is the duration to wait before creating a new request to the matching domains (second)
	delay int = 0
	// RandomDelay is the extra randomized duration to wait added to Delay before creating a new request (second)
	randomDelay int = 0
	// Include subdomains crawled from 3rd party. Default is main domain
	subs bool = false
	// Proxy (Ex: http://127.0.0.1:8080)
	proxy string = ""
	// Request timeout (second)
	timeout int = 10
	// Disable redirect
	noRedirect bool = false
	// User Agent to use
	// 	web: random web user-agent
	// 	mobi: random mobile user-agent
	// 	or you can set your special user-agent
	randomUA string = "web"
	// Output folder
	outputFolder string = "./output"
	// Turn on debug mode
	isDebug bool = false
	// Turn on verbose mode
	verbose  bool     = false
	siteList []string = []string{}
	threads  int      = 10
	// Try to crawl sitemap.xml
	useSitemap bool = true
	// Enable linkfinder in javascript file
	linkfinder bool = true
	// Try to crawl robots.txt
	robots bool = true
)

func Invoke(Url string) []core.SpiderOutput {
	siteList = append(siteList, Url)
	if isDebug {
		core.Logger.SetLevel(logrus.DebugLevel)
	} else {
		core.Logger.SetLevel(logrus.InfoLevel)
	}
	if !verbose && !isDebug {
		core.Logger.SetOutput(ioutil.Discard)
	}

	// Create output folder when save file option selected
	if outputFolder != "" {
		if _, err := os.Stat(outputFolder); os.IsNotExist(err) {
			_ = os.Mkdir(outputFolder, os.ModePerm)
		}
	}

	stat, _ := os.Stdin.Stat()
	// detect if anything came from std
	if (stat.Mode() & os.ModeCharDevice) == 0 {
		sc := bufio.NewScanner(os.Stdin)
		for sc.Scan() {
			target := strings.TrimSpace(sc.Text())
			if err := sc.Err(); err == nil && target != "" {
				siteList = append(siteList, target)
			}
		}
	}

	// Check again to make sure at least one site in slice
	if len(siteList) == 0 {
		core.Logger.Info("No site in list. Please check your site input again")
		os.Exit(1)
	}

	var wg sync.WaitGroup
	var crawler *core.Crawler
	inputChan := make(chan string, threads)
	for i := 0; i < threads; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for rawSite := range inputChan {
				site, err := url.Parse(rawSite)
				if err != nil {
					logrus.Errorf("Failed to parse %s: %s", rawSite, err)
					continue
				}
				var siteWg sync.WaitGroup
				crawler = core.NewCrawler(site, jsonOutput, maxDepth, concurrent, delay,
					randomDelay, subs, proxy, timeout, noRedirect, randomUA, outputFolder)
				siteWg.Add(1)
				go func() {
					defer siteWg.Done()
					crawler.Start(linkfinder)
				}()

				// Brute force Sitemap path
				if useSitemap {
					siteWg.Add(1)
					go core.ParseSiteMap(site, crawler, crawler.C, &siteWg)
				}

				// Find Robots.txt
				if robots {
					siteWg.Add(1)
					go core.ParseRobots(site, crawler, crawler.C, &siteWg)
				}
				siteWg.Wait()
				crawler.C.Wait()
				crawler.LinkFinderCollector.Wait()
			}
		}()
	}

	for _, site := range siteList {
		inputChan <- site
	}
	close(inputChan)
	wg.Wait()
	fmt.Println(crawler.Output.L)
	log.Infof("slice is %v", crawler.Output.L)
	core.Logger.Info("Done.")
	return crawler.Output.L
}
