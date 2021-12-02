const express = require("express");
const qs = require("qs");
const axios = require("axios");
const { urlValidation } = require("../controllers/helper");

const router = express.Router();

router.post("/", async (req, res) => {
  const newUrl = urlValidation(req, res);
  axios({
    method: "post",
    url: "https://tenon.io/api/",
    data: qs.stringify({
      url: newUrl,
      key: process.env.TENON_KEY,
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  })
    .then((response) => {
      console.log(response.data.resultSet);
      res.send({
        status: "success",
        data: response.data.resultSet,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
