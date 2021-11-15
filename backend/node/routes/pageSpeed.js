const express = require("express");
const axios = require("axios");
const { urlValidation } = require("../controllers/helper");

const router = express.Router();

router.get("/", async (req, res) => {
  const url = urlValidation(req, res);
  const key = process.env.PAGE_SPEED_KEY;
  const newUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${key}`;
  axios
    .get(newUrl)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
