const fs = require("fs");
let data = "Hello this is Jayant Yadav."
fs.writeFile("D:/HTML Projects/Learning/2.2+Native+Modules/message.txt",data,(err) =>{
    if (err) throw err;
    console.log("File has been saved!");
});

const {open} = require('node:fs/promises');

(async ()=>{
    const file =  await open ('2.2+Native+Modules/message.txt');

    for await(const line of file.readLines()){
        console.log(line);
    }
})();
