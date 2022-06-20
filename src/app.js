const express= require("express");
const path=require("path");
const app=express();
require("./db/conn");
const Register=require("./models/registers");
const hbs = require("hbs");
const port = process.env.PORT || 3000;

const static_path=path.join(__dirname,"../public");
const template_path= path.join(__dirname,"../templates/views")
const partial_path= path.join(__dirname,"../templates/partials")

app.use(express.json());
app.use(express.urlencoded({extended:false}))
// console.log(path.join(__dirname,"../public"))
app.use(express.static(static_path));

app.set("view engine","hbs")
app.set("views", template_path);
hbs.registerPartials(partial_path);

app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/register",(req,res)=>{
     res.render("register");
 });
// to create new db
 app.post("/register",async(req,res)=>{
   try{
        const password=req.body.password;
        const cpassword=req.body.confirmpassword;
        if(password===cpassword)
        {
            const registerEmployee= new Register({
                email:req.body.email,
                password:password,
                confirmpassword:cpassword
            })

            const registered= await  registerEmployee.save();
            // console.log(registered);
            res.status(201).render("index");
        }else{
            res.send("password not matching");
        }
        // console.log(req.body.email);
        // res.send(req.body.firstname);
   }catch(error){
     res.status(400).send(error);
   }
});
 
 app.get("/login",(req,res)=>{
     res.render("login");
 });

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})