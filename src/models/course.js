const mongoose = require('mongoose');
const validator=require('validator');

// courses schema
const courseSchema = new mongoose.Schema({
    course_name:{
        type:String,
        lowercase:true,
        trim:true,
        required:true,

    },
    course_pic_url:{
        type:String,
        trim:true,

    },
    instructor:{
        type:String,
        lowercase:true,
        trim:true,
        required:true,

    },
    course_detail:{
        type:String,
        lowercase:true,
        trim:true,
        required:true,
    },
    course_duration: [{
        hours: {
            type: Number, required: true, min: 0, max: 23
        },
        minutes: {
            type: Number, required: true, min: 0, max: 59
        },
        seconds: {
            type: Number, required: true, min: 0, max: 59
        }
    }],
    module:[{
        module_name:{
            type:String,
            lowercase:true
        },
        total_no_of_videos:Number,
        percentage:String,
        file_link:{
            type:String,
            default:""
        },
        videos:[{
            video_title:{
                type:String,
                trim:true,
                lowercase:true,
                required:true
            },
            video_url:{type:String,trim:true,required:true},
            is_demo:{type:Boolean,default:false}
        }],
        oregen_coins:Number,
        is_free:{
            type:Boolean,
            default:false
        }

    }],
    no_of_modules:{
        type:Number
    },
    course_category:{
        type:String,
        lowercase:true
    },
    course_sub_category:{
        type:String,
        lowercase:true
    },
    price:{
        type:Number
    },
    is_premium:{
        type:Boolean,
        default:false
    },
    assignment_url:{
        type:String,
        trim:true,
    }
})

courseSchema.index({ course_name: 'text', course_detail: 'text', course_category: 'text',course_subcategory: 'text' });

const Course = new mongoose.model("courselist",courseSchema);

module.exports = Course;

