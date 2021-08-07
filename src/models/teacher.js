const mongoose = require('mongoose');
const validator=require('validator');


const teacherSchema = new mongoose.Schema({
    rating:{
        type:Number,
        max:5,
        min:0,
        trim:false,
    },
    teacher_name:{
        type:String,
        lowercase:true,
        trim:true,
        required:true,
    },
    experience:{
        type:Number,
        trim:true,
        required:true,
    },
    courses:[{
        course_name:{
            type:String,
            lowercase:true,
            trim:true,
            required:true
        },
        assignment:{
            type:String,
            lowercase:true,
            trim:true,
            required:true


        }
    },
]


});

const Teacher = new mongoose.model("teacherlist",teacherSchema);

module.exports = Teacher;