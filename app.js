const express = require("express");
const bodyParser=require("body-parser");
const request=require("request");

const app=express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


var items=[];
app.get("/",function(req,res){
    var date=new Date();
    var currentday=date.getDay();
    var day;
    
    switch(currentday){
        case 0: day="Sunday"
                break;
        case 1: day="Monday"
                break;
        case 2: day="Tuesday"
                break;
        case 3: day="Wednesday"
                break;
        case 4: day="Thursday"
                break;
        case 5: day="Friday"
                break;
        case 6: day="Saturday"
                break;

        default: console.log(currentday);
        
    }

    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    day= date.toLocaleDateString("en-US",options);
    
    res.render('list',{daytoday: day, newItem: items}); 
});

app.post("/",function(req,res){
    req.body;
    if(req.body.newpoint!=""){
        items.push(req.body.newpoint);
    }
    
    res.redirect("/");
})

app.listen(3000,function(){
    console.log("Server Running on Port 3000");
})