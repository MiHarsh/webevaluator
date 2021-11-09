package router

import (
	"github.com/Aman-Codes/backend/go/pkg/invoke"
	"github.com/Aman-Codes/backend/go/pkg/log"
	"github.com/gin-gonic/gin"
)

type URL struct {
	URL string `json:"URL" binding:"required"`
}

func Router() {
	router := gin.Default()
	router.GET("/status", func(c *gin.Context) {
		log.Info("hit the status route")
		c.JSON(200, gin.H{
			"status": "OK",
		})
	})
	router.POST("/crawl", func(c *gin.Context) {
		log.Info("hit the crawl route")
		var url URL
		c.BindJSON(&url)
		log.Infof("url received is %s", url.URL)
		// m := crawler.Crawler(url.URL)
		// log.Infof("final map is %v", m.List)
		// jsonString, err := json.Marshal(m.List)
		// log.Infof("jsonString is %s", jsonString)
		// if err != nil {
		// 	c.JSON(200, gin.H{
		// 		"status": "error",
		// 		"data":   err.Error(),
		// 	})
		// 	return
		// }
		urlList, mediaList, err := invoke.Invoke(url.URL)
		if err != nil {
			c.JSON(200, gin.H{
				"status": "error",
				"data":   err.Error(),
			})
			return
		}
		c.JSON(200, gin.H{
			"status":    "OK",
			"urlList":   urlList,
			"mediaList": mediaList,
		})
	})
	router.Run(":8080")
}
