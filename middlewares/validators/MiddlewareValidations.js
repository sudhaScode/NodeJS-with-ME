const reqBodyValidation = (req, res , next)=>{
    //console.log(req.method)
    if(req.method !== "GET" && req.method !== "DELETE"){
        const contentType = req.headers["content-type"];
    //console.log(contentType, "::COntent type")
    if(contentType !== "application/json"){
       res.status(415).json({message:"content type must te json format"})
       return;
    }
    }
    //console.log("POST")
    next();
}

module.exports = {reqBodyValidation};