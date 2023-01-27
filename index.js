const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const multer = require("multer");
const cookieParser = require("cookie-parser");
const fs = require("fs");
app.use(express.static(__dirname + "/"));
app.use(cookieParser());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "VidIQ API is  working" });
});

//Loop of allowed origins
const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];

//CORS policy access
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(express.static(__dirname + "/medias"));

const connectDB = require("./config/database");
connectDB();

app.use("/api/getuser", require("./routes/user_register"));

// singup API
app.use("/api/signup", require("./routes/user_register"));

// login api
app.use("/api/login", require("./routes/login"));

// logout api
app.use("/api/logout", require("./routes/logout"));

// Profile req and res
app.use("/api/profile", require("./Profile/Userprofile"));

// api to upload video
app.use("/api/upload", require("./routes/VideoUpload"));

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
