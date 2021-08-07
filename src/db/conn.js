const mongoose = require('mongoose');
const validator=require('validator');
// connecting to server

mongoose.connect(process.env.MONGODB_URI,{ useUnifiedTopology: true,useNewUrlParser: true ,useCreateIndex:true , useFindAndModify:false});
mongoose.connection
.once('open',()=>console.log("connected")
)
.on('error',(error)=>{
    console.log(error);
    

})