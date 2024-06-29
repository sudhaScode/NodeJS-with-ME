const Joi = require("joi");

const schema  = Joi.object().keys({
    age: Joi.number().integer().min(1).max(100),
    gender: Joi.string().valid('male', 'female')
}).or("age", "gender")

const getQueryErrors = (req, res, next) => {
    
    const {gender, age} = req.query;
    const result = schema.validate({age: age, gender: gender});
    
    if(result.error){
    res.status(422, "Unprocessable entity").json({message: result.error.details[0].message}).end();
    return;
    }
    else{
      next();
    }
  }
  
module.exports =  getQueryErrors ;