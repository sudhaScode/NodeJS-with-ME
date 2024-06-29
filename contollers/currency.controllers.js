const currenciesData = require('../currencies.json')

const getCurrencies = (req,res)=>{
    const {method, url, headers} = req;

    let query = req.query;

    let data = currenciesData.data;
   // console.log(query)
    if(query){
        let filteredData = data.filter((currency)=>currency.min_size >= 0.01);
        res.json(filteredData);
    }
    else{
        res.json(currenciesData.data);
    }
    
} 
const getCurrency =(req,res)=>{
    const {method, url, headers} = req;
   let symbol = (req.params.symbol).toUpperCase();
   //console.log(symbol)
    let requireData = currenciesData.data;
    //console.log(requireData)
    requireData = requireData.find((currency)=>currency.id === symbol)
    //console.log(requireData)
    res.status(200);
    res.send(requireData);
}
module.exports = {getCurrencies, getCurrency}