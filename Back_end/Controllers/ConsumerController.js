
const Consumermodel = require("../Models/Consumer_models")
const WhereHouse = require("../Models/WhereHouse")

exports.ConsumerMain = async (req, res)=>{

 try{
    console.log(req.body)
const {weight, pincode ,rate_type} = req.body
if(!pincode || !weight || !rate_type){
    return res.status(400).send({message: "please enter value "})
}
const consumerDocument = await  Consumermodel.findOne({

    pincode : pincode
})
console.log(consumerDocument)
if(!consumerDocument){
    return res.status(400).send({message:"no consumer Document Found"})
}

const WhereHouseDocument = await WhereHouse.findOne({
    rate_type:rate_type,  
    zone:consumerDocument.zone
})

if(!WhereHouseDocument){
    return res.status(400).send({message:"no WhereHouseDocument Found"})
}
console.log(WhereHouseDocument)
 console.log(consumerDocument)
const numberOfIem = Math.floor(Number (weight) /0.5)
console.log(numberOfIem)
const TotalPrice = WhereHouseDocument.price +(Number(WhereHouseDocument['additional_price'])* (numberOfIem - 1));
console.log(WhereHouseDocument[' additional_price'])
 console.log(WhereHouseDocument.price)
res.status(200).send({TotalPrice})

 }catch(err){
     console.log(err)
 }
    
}

