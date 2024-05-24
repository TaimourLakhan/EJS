const express = require("express");

const app = express();

const port = 3000;
const path=require("path");

// setting view path where express serach it 

app.set("views",path.join(__dirname,"/views"));

//by declaring above we can acess views anywhere 

// to use ejs we must include this 

app.set("view engine","ejs");

app.listen(port,()=>{
    console.log(`app is listning at the port : ${port}`);
    
})

app.get("/",(req,res)=>{
    // res.send("this is root page");
    res.render("home.ejs")
})

// in ejs we didnot send response we jsut render response render mean send files of views res send just send stsring html tags etc if we want to send file in resonse we just render ejs 

app.get("/rolldice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6 +1);
    res.render("rolldice.ejs",{diceVal});
})

// suppose data is coming from data base and we store it in variable theb after file in render method second variable if pass that we set in interpolation syntax in html file 

// now activity for instagram 

app.get("/ig/:username",(req,res)=>{
    const instaData=require("./data.json")
    let{username}=req.params;
    
    let data=instaData[username];
    // console.log(data);
    // console.log(data);
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("err.ejs");
    }
    

})




