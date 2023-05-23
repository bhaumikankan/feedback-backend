const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/FeedBackSys");
//mongoose.connect('mongodb+srv://feedback:feedback@cluster0.ufdpq.mongodb.net/?retryWrites=true&w=majority');
const conn = mongoose.connection;

conn.on("connected", () => {
  console.log("db connected");
});

conn.on("error", () => {
  console.log("db error");
});
