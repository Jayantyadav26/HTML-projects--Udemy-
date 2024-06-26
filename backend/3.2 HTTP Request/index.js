import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res)=>{                       
    // anonymous function and we can tap into request and response.

    //browser request 
    //console.log(req.rawHeaders);   
    
    // what we do when request is made.
    // res.send('<a href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2"> Link </a>');   

    //redirtect to a website
    // res.redirect('https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2');
    
    //text
    res.send("hello world");
})

app.get("/about",(req , res)=>{
    res.send("<h1>Jayant Yadav</h1>");
});

app.get("/contact",(req,res)=>{
    res.send("<p>99919010</p>")
})

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}.`);
})