const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
  fullName: { type: String, maxlength: 25 },
  twitterHandle: { type: String },
  email: { type: String, required: true, maxlength: 50 },
  image: { type: String },
 },
 {_id:false});

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true}, 
    author: [authorSchema], 
    content: { type: String, default: "" },
    publishedAt: { type: Date, default: null },
  },
  
  {timestamps: true}
  );
  
  const Blogs = mongoose.model("Blogs", blogSchema, "WebsiteBlogs")
  module.exports = Blogs;