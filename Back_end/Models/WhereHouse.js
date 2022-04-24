const {Schema,model} = require("mongoose");

const WhereHouseSchema  =  new Schema({
   
    zone :{type:String},
    rate_type :{type:String , enum:["Forward", "Forward & RTO"]},
    price:{type:Number},
    additional_price:{type:Number},
});

module.exports= model("WhereHouseSchema", WhereHouseSchema);

