const BlogServiceClass = require("../services/blog.service");
const Blogs = require("../models/blog.model");

const BlogService = new BlogServiceClass();

const postCreateNewBlog =async (req, res)=>{
    //const newBlogDoc = new Blogs({title: "First blog"})
    const {title} = req.body;
   // console.log(req.body)
    try{
        const body ={
            title: title
        }
        const newBlogDoc = await BlogService.createBlog(body);
        res.status(200).json(newBlogDoc)
    }
    catch(error){
        if (error.code === 11000)
           res.status(500).json({message: "Duplicate entry!"})
        else{
            res.status(400).json({message: "Client missed something"})
        }
    }
    //console.log("DEBUG:: ", newBlogDoc)
}

const getBlogs = async (req, res)=>{
   try{
    const allBlogs = await BlogService.findBlogs();
    //console.log("DEBUG:: ", allBlogs)
    res.status(200);
    res.json(allBlogs);
   }
   catch(e){
    res.status(404).json("Clould not found relative blogs")
   }
}
const getBlog = async (req, res)=>{
    try{
     const {id} = req.params;
     const Blog = await BlogService.findBlogsById(id);
     //console.log("DEBUG:: ", allBlogs)
     res.status(200);
     res.json(Blog);
    }
    catch(e){
     res.status(404).json("Clould not found relative blog by id")
    }
 }


const deleteBlog = async (req, res)=>{
    const {id} = req.params
   //console.log(id)
    try{
        const result = await BlogService.removeBlogById(id)
        //if mongoose model cloudn't find documents it returns null with erro,r handle it
        //console.log(instance)
        res.status(200)
        res.json(result);
    }
    catch(e){
        res.status(404).json("No blog was deleted")
    }

}

const patchBlog =async (req, res)=>{
    const {filter} = req.params;
    const update = req.body
    //console.log(id)
     try{
         const result =await BlogService.updateBlog(filter, update);
         //if mongoose model cloudn't find documents it returns null with erro,r handle it
         //console.log(instance)
         res.json(result);
     }
     catch(e){
         res.status(404).json("No blog was udadted")
     }
    
}
module.exports = {postCreateNewBlog, getBlogs, getBlog, deleteBlog, patchBlog};