const router = require('express').Router();
const {getUsers, getUser, getTargetUser} = require('../contollers/users.controllers')
const validateClient = require('../middlewares/authentication')
const getQueryErrors = require('../middlewares/validators/users.validators')

//router.get("/",validateClient ,getUsers)
router.get("/",getUsers)
router.get("/search",getQueryErrors, getTargetUser);    
router.get("/:uuid", getUser);

module.exports = router;