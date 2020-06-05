const express = require('express');
const app = express();

const port = 4200;
app.get("/customers" ,(req,res)=>{
    res.send("customer result");
})
app.listen(port,()=>{
    console.log("server listening at port 4200");
}) 