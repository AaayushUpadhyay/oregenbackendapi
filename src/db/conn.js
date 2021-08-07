const mongoose = require('mongoose');
const validator=require('validator');
// connecting to server

mongoose.connect("mongodb://127.0.0.1:27017/userdb",{ useUnifiedTopology: true,useNewUrlParser: true ,useCreateIndex:true , useFindAndModify:false});
mongoose.connection
.once('open',()=>console.log("connected")
)
.on('error',(error)=>{
    console.log(error);
    

})