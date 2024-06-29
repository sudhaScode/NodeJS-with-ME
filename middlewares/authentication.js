

const validateClient  = (req, res, next)=>{
    const password = process.env.PASSWORD
    const {headers} = req;
    //console.log("AUTH DEBUG::" , headers)
 
    if(!headers.authentication){
        res.status(401).json("Unauthorized Request")
    }
    else if(password === headers.authentication){
        next();
      }
    else{
        res.status(401).json("Unauthorized Request")
    }
}

module.exports = validateClient 