const express = require("express");
require("./db/conn");
const Student = require("./models/student");
const Teacher = require("./models/teacher");
const Course = require("./models/course");

const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());

// inserting data of new student
app.post("/student",async (req,res)=>{
    try{
        const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);

    }
    catch(error){
        res.status(400).send(error);
    }
})



// getting registration status of a single student based on his/her phone no

app.get("/student/register_status/:phone/",async (req,res)=>{

    try{
        const contact = req.params.phone;
        const StudentData = await Student.find({phone:contact},{already_registered:1});
        console.log(StudentData.length);
        
        
        if(StudentData.length != 0){
            console.log(contact);

            let status = StudentData[0].already_registered;
            if(status == true){
                res.send({"is_registered":true,"message":"Show him the courses page."})
            } 
            else{
                res.send({"is_registered":false,"message":"First complete your user profile."})
            }        

        }
        else {
            // console.log(StudentData);
           
            
            const newUser = new Student({"already_registered":false,"phone":contact});
           
           
            const createUser = await newUser.save();
            res.status(201).send(createUser);
        }
       

    }
    catch(e){
        res.status(400).send(e);
    }

})









// updating student data
// update the student by it's id
app.patch("/student/update/:id/",async (req,res)=>{

    try{
        const sid = req.params.id;
        console.log(sid);
        console.log(req.body);
        const updatedData = await Student.findByIdAndUpdate({_id:sid},req.body,{new:true})
        res.send(updatedData); 

    }
    catch(e){
        res.status(400).send(e);
        // console.log(e);
        
    }

})


// delete student by id
app.delete("/student/del/:id/",async (req,res)=>{

    try{
        const sid = req.params.id;
        const deletedData = await Student.findByIdAndDelete({_id:sid});
        res.send(deletedData);

    }
    catch(e){
        res.status(500).send(e);
    }


})




// getting all student data

app.get("/student/all/",async (req,res)=>{

    try{
        const allStudentData = await Student.find();
        res.send(allStudentData); 

    }
    catch(e){
        res.status(400).send(e);
    }

})



// getting data of a single student based on his/her phone no
app.get("/student/complete/:phone/",async (req,res)=>{

    try{
        const contact = req.params.phone;
        const StudentData = await Student.find({phone:contact});
        res.send(StudentData); 

    }
    catch(e){
        res.status(400).send(error);
    }

})


// courses taken by a particular student based on his phone no
app.get("/student/mycourses/:phone/",async (req,res)=>{

    try{
        const pno = req.params.phone;
        
        const StudentData = await Student.find({phone:pno},{courses_taken:1,username:1,phone:1});
       
      
        res.send(StudentData);
      }
    catch(e){
        res.status(400).send(e);
    }

})


// particular course section
app.get("/student/mycourses/:phone/:course",async (req,res)=>{

    try{
        const pno = req.params.phone;
        const course= req.params.course;
        const StudentData = await Student.find({phone:pno},{courses_taken:1,username:1,phone:1});
        let arr = StudentData[0].courses_taken;
        let x= arr.findIndex((e,i)=>{
            if(e.course_name==course){
                return true;
            }
        });
        if(x!=-1){
            console.log(x);
            let name=arr[x].course_name;
            console.log(name);
            
          const courseData = await Course.find({course_name:arr[x].course_name});
          res.send(courseData);
        }
        else{
          res.send({"message":"you have not enrolled in this course"})
        }

         

    }
    catch(e){
        res.status(400).send(e);
    }

})


// setting already_registered to true once user has filled the form
app.patch("/student/complete/:phone/",async (req,res)=>{

    try{
        const contact = req.params.phone;
        const StudentData = await Student.find({phone:contact},{already_registered:1});
        
        
        let status = StudentData[0].already_registered;
        let sid = StudentData[0]._id;
        if(status!=true){
            const updatedData = await Student.findByIdAndUpdate({_id:sid},req.body,{new:true});
            res.send(updatedData);
            

        }

    }
    catch(e){
        res.status(400).send(e);
       
        
    }

})





// courses api

// creating a new course
app.post("/course",async (req,res)=>{
    try{
        const course = new Course(req.body);
    const createCourse = await course.save();
    res.status(201).send(createCourse);

    }
    catch(error){
        res.status(400).send(error);
    }
})


// getting all courses

app.get("/student/all/",async (req,res)=>{

    try{
        const allStudentData = await Student.find();
        res.send(allStudentData); 

    }
    catch(e){
        res.status(400).send(error);
    }

})





// starting the server

app.listen(port,()=>{
    console.log(`Connected to server at port no ${port}`);
    
})





