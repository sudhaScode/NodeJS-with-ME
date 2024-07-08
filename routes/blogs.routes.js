const blogsRouter = require('express').Router();
const  {postCreateNewBlog, getBlogs, getBlog, deleteBlog, patchBlog} = require("../contollers/blogs.controller")

blogsRouter.post("/new", postCreateNewBlog)
blogsRouter.get("/all", getBlogs)
blogsRouter.delete("/:id", deleteBlog)
blogsRouter.patch("/:id", patchBlog)

module.exports = blogsRouter;