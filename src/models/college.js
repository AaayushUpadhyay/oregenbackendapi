const mongoose = require('mongoose');
const validator=require('validator');


const engineeringCollegeSchema = new mongoose.Schema({
    Institute_Type:{
        type:String,
        trim:true,
        enum:["IIT","NIIT","IIIT","GFTI",""],
        default:""
    },
    Institute_Name:{
        type:String,
        trim:true,
    },
    Academic_Program:{
        type:String,
        trim:true,
    },
    Quota:{
        type:String,
        trim:true,
        enum:["AI","AP","GO","HS","JK","LA","OS",""],
        default:""
    },
    Seat_Type:{
        type:String,
        trim:true,
    },
    Gender:{
        type:String,
        trim:true,
    },
   
    Opening_Rank:{
        type:String,
        trim:true,
    },
    Closing_Rank:{
        type:String,
        trim:true,
    },
    Year:{
        type:String,
        trim:true,
    },
    c_id:{
        type:String,
        trim:true,
    },
    id:{
        type:String,
        trim:true,
    },
})


const engineeringcollege = new mongoose.model("collegelist",engineeringCollegeSchema);

module.exports = engineeringcollege;