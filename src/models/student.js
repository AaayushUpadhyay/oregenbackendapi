// student schema
const mongoose = require('mongoose');
const validator=require('validator');
const studentSchema = new mongoose.Schema({
    already_registered:{
        type:Boolean,
        default:false,
        required:true

    },
    profile_pic_url:{ type:String , trim:true },
    name:{
        type:String,
        required:false,
        lowercase:true,
        trim:true,
        

    },
    username:{
        type:String,
        required:false,
        lowercase:true,
        trim:true,
        

    },
    
    email:{
        type:String,
        required:false,
        unique:[true,"Email id already present"],
        trim:true,
        default:'',
        validate(value){
            if(value != ""){
                if(!validator.isEmail(value)){
                    throw new Error("invalid email")
    
                }
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:false,
        default:0,
        validate(value){
            if(value != 0){
                if(value<5){
                    throw new Error('Age cannot be less than 5');
                }
            }
        }
    },
    gender:{
        
        type:String,
        required:false,
        lowercase:true,
        enum:["male","female","others",""],
        default:""

        

    },
    address:{
        type:String,
        required:false,
        lowercase:true,
        trim:true,
        default:""

    },
    city:{
        type:String,
        required:false,
        lowercase:true,
        trim:true,
        default:""

    },
    state:{
        type:String,
        required:false,
        lowercase:true,
        trim:true,
        default:""
    },
    zipcode:{
        type:Number,
        default:0,
        validate: {
            validator: function(v) {
              if(v!=0){
                return /^[1-9]{1}[0-9]{2}[\s]{0,1}[0-9]{3}$/.test(v);

              }
            },
            message: props => `${props.value} is not a valid zipcode!`
          },
    },
    total_coins_earned:Number,
    courses_taken:{
        type:[{course_name:String,percentage_completed:Number}],
        default:[],
    },
    courses_seen:{
        type:[{course_name:String,no_of_times:Number}],
        default:[],
    },
    date:{
        type:Date,
        default:Date.now
    },
    referral_code:{
        type:String,
        default:"",
        required:false
    }



})


const Student = new mongoose.model("studentlist",studentSchema);

module.exports = Student;