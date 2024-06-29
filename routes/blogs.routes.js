const router = require('express').Router();
const  {postCreateNewBlog, getBlogs, getBlog, deleteBlog, patchBlog} = require("../contollers/blogs.controller")

router.post("/new", postCreateNewBlog)
router.get("/all", getBlogs)
router.delete("/:id", deleteBlog)
router.patch("/:id", patchBlog)

module.exports = router;