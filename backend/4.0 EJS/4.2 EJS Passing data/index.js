import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const data = {
    title: "Enter Your Name below",
  }
  
  res.render("index.ejs",data);
});

app.post("/submit", (req, res) => {
  const len =  req.body["fName"].trim().length+req.body["lName"].trim().length;
  console.log(len);
  const data = {
    title: `Name has ${len} letter`,
  }
  res.render("index.ejs",data);

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
