const express = require("express");
const ejs = require("ejs");
const pdf = require("html-pdf");
const path = require("path");
const { sendFile, randomString } = require("../controllers/helper");
const {
  adaErrors,
  cookieChecker,
  sniffer,
  lowvision,
  colorblind,
  ssl,
} = require("../controllers/process");

const router = express.Router();

router.get("/", (req, res) => {
  const url = "https://aman-codes.github.io";
  Promise.allSettled([
    cookieChecker(url),
    sniffer(url),
    adaErrors(url),
    lowvision(url),
    colorblind(url),
    ssl(url),
  ])
    .then((allData) => {
      console.log("allData is", allData);
      ejs.renderFile(
        path.join(__dirname, "../views/", "report-template.ejs"),
        {
          allData: allData,
        },
        (err, data) => {
          if (err) {
            console.log("error occurred", err);
            res.send(err);
          } else {
            const options = {
              // this will contain pdf export configurations detail at https://www.npmjs.com/package/html-pdf
              height: "11.25in",
              width: "8.5in",
              header: {
                height: "15mm",
              },
              footer: {
                height: "15mm",
              },
            };
            const fileName = `report${randomString(10)}.pdf`;
            pdf
              .create(data, options)
              .toFile(fileName, function (error, _response) {
                if (error) {
                  console.log("error occurred", error);
                  res.send(error);
                } else {
                  const filePath = path.resolve(__dirname, "..", fileName);
                  sendFile(res, filePath);
                }
              });
          }
        }
      );
    })
    .catch((e) => {
      console.log("error occurred", e);
      res.send(e);
    });
});

module.exports = router;
