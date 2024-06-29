const Router = require('express').Router();
const blogsRouter = require('./blogs.routes')

Router.use("/",blogsRouter );

module.exports = Router;