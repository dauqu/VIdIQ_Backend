require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log(
      "VidIQ Database Connected Successfuly----------------------"
    );
  } catch (error) {
    console.log("(VidIQ Connection error) ", error);
  }
};
module.exports = connectDB;
