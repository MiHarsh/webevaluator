const express = require("express");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");

const router = express.Router();

const HTMLCS = fs.readFileSync("./build/webcrawler.min.js/index.js", "utf-8");
const vConsole = new jsdom.VirtualConsole();

router.get("/", async (req, res) => {
  vConsole.on("log", function (message) {
    console.log(message);
  });

  const dom = new JSDOM("", {
    runScripts: "dangerously",
    virtualConsole: vConsole,
  });

  dom.window.eval(HTMLCS);
  dom.window.HTMLCS_RUNNER.run("WCAG2AA");
});

module.exports = router;
