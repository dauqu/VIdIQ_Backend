let uuidv4 = require("uuid");
let multer = require("multer");
let path = require("path");
var DIR = "./medias/";

const videoStorage = multer.diskStorage({
  destination: DIR, // Destination to store video
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const videoUpload = multer({
  storage: videoStorage,
  limits: {
    // fileSize: 10000000, // 10000000 Bytes = 10 MB

    fileSize: 100000000, // 100000000 Bytes = 100 MB
  },
  fileFilter(req, file, cb) {
    // upload only mp4 and mkv format
    if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) {
      return cb(new Error("Please upload a video"));
    }
    cb(undefined, true);
  },
});

module.exports = videoUpload;
