const express = require("express");
const router = express.Router();
const videoUpload = require("./../config/videoupload");
require("dotenv").config();
const video = require("./../models/VIdeo");
router.get("/", async (req, res) => {
  let videoData = await video.find();
  res.json({
    videoData,
  });
});

router.post("/uploadVideo", videoUpload.single("video"), async (req, res) => {
  try {
    let url = req.protocol + "://" + req.get("host") + "/" + req.file.filename;
    const videoData = new video({
      videoUrl: url,
    });
    await videoData.save();
    res.json({
      message: "Video uploaded successfully",
      videoData,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

module.exports = router;
