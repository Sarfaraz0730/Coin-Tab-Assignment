const {Schema,model} = require("mongoose");

const ConsumerSchema  =  new Schema({
    pincode : String,
    zone: String
});



module.exports = model(" ConsumerSchema" ,  ConsumerSchema)