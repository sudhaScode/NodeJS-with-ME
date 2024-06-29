const Blogs = require("../models/blog.model")


class BlogService {
findBlogs = async ()=> Blogs.find({});
findBlogsById = async (id)=>Blogs.find(id)
createBlog = async (body)=>Blogs.create(body)
updateBlog = async (filter, update)=> await Blogs.findOneAndUpdate(filter, update, { new: true })
removeBlogById = async (id)=>Blogs.findByIdAndDelete({_id :id });
}
module.exports = BlogService;
