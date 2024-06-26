import express from "express";
const app = express();
const port = 3000;

// Get method

app.get("/",(req,res)=>{
    res.send("Hello, World!");
})
//req=>request res=> response


app.listen(port , ()=>{
    console.log(`Server is running on port ${port}.`);
});