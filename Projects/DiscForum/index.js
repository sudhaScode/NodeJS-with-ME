// import mongoose library
const mongoose = require("mongoose")

console.log("Server Listening at PORT 8082")
//connect to mongodb://localhost:27017/discforum using mongoose
mongoose.connect("mongodb://localhost:27017/discforum").then(console.log("Database Connected")).catch("connection to database failed")




