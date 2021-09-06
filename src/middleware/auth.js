const jwt = require("jsonwebtoken");
const Student = require("../models/student");
const cookieParser = require("cookie-parser");

let SECRET_KEY= "mynameiscareerkickservicesnikhilsachan";

const auth = async (req,res,next)=>{

    try{
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token,SECRET_KEY);

        
        const user = await Student.findOne({_id:verifyUser._id});
        

        req.user=user;
        req.token=token;

        next();

    }
    catch(error){
        res.status(401).send(error);
    }

}

module.exports = auth;