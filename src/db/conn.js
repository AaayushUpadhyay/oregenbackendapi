const mongoose = require('mongoose');
const validator=require('validator');
// connecting to server
// process.env.MONGODB_URI
// mongodb+srv://AyushUpadhyay:B_F7E4wR44umrAd@cluster0.blctx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(process.env.MONGODB_URI,{ useUnifiedTopology: true,useNewUrlParser: true ,useCreateIndex:true , useFindAndModify:false});
mongoose.connection
.once('open',()=>console.log("connected")
)
.on('error',(error)=>{
    console.log(error);
    

})