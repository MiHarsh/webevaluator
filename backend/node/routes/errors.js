const express = require("express");
const puppeteer = require("puppeteer");
const data = require("../data/data");

const router = express.Router();

router.get("/css", async (req, res) => {
  // const { url } = req.params;
  const url = "https://techfest.org";
  console.log("Url is", url);
  if (!url) {
    res.send({
      status: "error",
      message: "missing input url",
    });
  }
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: false,
      timeout: 100000,
    });
    const page = await browser.newPage();

    // Below commented code will block image, media and stylesheet
    // to decrease page load time

    // await page.setRequestInterception(true);
    // page.on("request", (request) => {
    //   if (
    //     request.resourceType() === "image" ||
    //     request.resourceType() === "media" ||
    //     request.resourceType() === "stylesheet"
    //   ) {
    //     request.abort();
    //   } else {
    //     request.continue();
    //   }
    // });

    await page.goto(url, {
      waitUntil: "domcontentloaded",
    });
    const resultList = await page.evaluate((list) => {
      const result = [];
      list.forEach((e) => {
        const elementList = document.querySelectorAll(e.selector);
        if (elementList.length) {
          result.push({ ...e, count: elementList.length });
        }
      });
      return result;
    }, data);
    console.log("evaluation completed");
    await browser.close();
    console.log("resultList is", resultList);
    res.send({
      status: "success",
      result: resultList,
    });
  } catch (error) {
    await browser?.close();
    console.log("error is", error);
    res.send({
      status: "error",
      message: error,
    });
  }
});

module.exports = router;
