const Router = require('express').Router();
const blogsRouter = require('./blogs.routes');
const userRouter= require("./user.routes")


Router.use("/blogs",blogsRouter );
Router.use("/users", userRouter)

module.exports = Router;