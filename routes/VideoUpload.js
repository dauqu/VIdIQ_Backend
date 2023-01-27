const express = require("express");
const router = express.Router();
const videoUpload = require("../config/videoupload");
require("dotenv").config();

router.get("/", (req, res) => {
  res.send("Getting api to chech APi is working");
});

router.post("/uploadVideo", videoUpload.single("video"), (req, res) => {
  try {
    let url = req.protocol + "://" + req.get("host") + "/" + req.file.filename;
    res.send(url);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

module.exports = router;
