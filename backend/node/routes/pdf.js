const express = require("express");
const ejs = require("ejs");
const pdf = require("html-pdf");
const path = require("path");
const { sendFile } = require("../controllers/helper");

const router = express.Router();

const students = [
  {
    name: "Joy",
    email: "joy@example.com",
    city: "New York",
    country: "USA",
  },
  {
    name: "John",
    email: "John@example.com",
    city: "San Francisco",
    country: "USA",
  },
  {
    name: "Clark",
    email: "Clark@example.com",
    city: "Seattle",
    country: "USA",
  },
  {
    name: "Watson",
    email: "Watson@example.com",
    city: "Boston",
    country: "USA",
  },
  {
    name: "Tony",
    email: "Tony@example.com",
    city: "Los Angels",
    country: "USA",
  },
];

router.get("/", (req, res) => {
  ejs.renderFile(
    path.join(__dirname, "../views/", "report-template.ejs"),
    {
      students: students,
    },
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        const options = {
          // this will contain pdf export configurations detail at https://www.npmjs.com/package/html-pdf
          height: "11.25in",
          width: "8.5in",
          header: {
            height: "20mm",
          },
          footer: {
            height: "20mm",
          },
        };
        const fileName = "report.pdf";
        pdf.create(data, options).toFile(fileName, function (error, _response) {
          if (error) {
            res.send(error);
          } else {
            const filePath = path.resolve(__dirname, "..", fileName);
            sendFile(res, filePath);
          }
        });
      }
    }
  );
});

module.exports = router;
