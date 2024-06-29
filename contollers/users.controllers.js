const usersData = require('../users.json');
const getQueryErrors = require('../middlewares/validators/users.validators');

const getUsers =(req, res)=>{
    const data = usersData.data;
    //console.log(data)
    res.json(data);
}
const getUser = (req, res)=>{
    const requiredUser = req.params.uuid;
    //console.log("user route");
    const filteredData = usersData.data.filter((user)=>user.login.uuid === requiredUser);
    res.status(200);
    res.send(filteredData);

   // console.log(requiredUser);
}

const getTargetUser = (req,res)=>{
  //console.log("search query")
  console.log(req)
  const {gender, age} = req.query;
  if(gender && !age){
     const filteredData = usersData.data.filter((user)=>user.gender === gender);
     //console.log("filter:: gender");
     res.status(200);
     res.json(filteredData)
    }
    else if(age && !gender){
      
      const filteredData = usersData.data.filter((user)=>user.dob.age === age);
      //console.log("filter:: age");
      res.status(200);
     res.json(filteredData);
    }
    else{
     const filteredByData = usersData.data.filter((user)=>user.gender === gender && user.dob.age === Number(age));
     if(filteredByData.length <=0){
      res.status(204).send("No user found");
      return;
     }
     res.status(200);
     res.json(filteredByData);
    }
}

module.exports = {getUsers, getUser, getTargetUser}