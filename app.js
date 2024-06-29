const { json } = require('express');
const express = require('express');
require('dotenv').config();

const {getCurrencies, getCurrency} = require('./contollers/currency.controllers')
const {getUsers, getUser, getTargetUser} = require('./contollers/users.controllers')
const currenciesData = require('./currencies.json');
const currencyRouter = require('./routes/currencies.routes');
const userRouter =require('./routes/user.routes');
const Router = require("./routes/index")
const blogRouter = require("./routes/blogs.routes")
const validateClient = require ('./middlewares/authentication')
const {reqBodyValidation} = require("./middlewares/validators/MiddlewareValidations")
const mongoose = require('mongoose')

const PORT =8081;
const app = express();
app.use(reqBodyValidation)// varify the conent type
app.use(express.json())
const DB_URI = process.env.DB_URI;
mongoose
.connect(`${DB_URI}`)
  .then(() => console.log("Connected to DB at", DB_URI))
  .catch((e) => console.log("Failed to connect to DB", e));

app.use(validateClient)
//or
//app.use("/users", validateClient, userRouter);
//app.use("/currencies", currencyRouter)

/*---------------------Users routes---------------------------------*/

//app.use("/users",  userRouter);

app.use("/blogs",  Router)

app.listen(PORT, ()=>{console.log(`Server listening at ${PORT}`)})