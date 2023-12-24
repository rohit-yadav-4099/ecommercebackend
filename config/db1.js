const mongoose = require("mongoose");
const cloudurl = "mongodb+srv://rohityadav4099:rohit2194@cluster0.ltpukis.mongodb.net/ProjectEcommerce?retryWrites=true&w=majority"
// mongoose.get("strictQuery",true)
const connection = async () => {
  try {
    await mongoose.connect(cloudurl);
    console.log("Connected to the database");
  }
  catch (err) {
    console.error("Error occured in connection to DataBase", err);
  }
};
module.exports = connection;
