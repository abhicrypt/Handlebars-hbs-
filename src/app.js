const express= require("express");
const path=require("path");
const app=express();
require("./db/conn");
const hbs = require("hbs");
const port = process.env.PORT || 3000;

const static_path=path.join(__dirname,"../public");
const template_path= path.join(__dirname,"../templates/views")
const partial_path= path.join(__dirname,"../templates/partials")
// const view_login= path.join(__dirname,"../templates/partials")

// console.log(path.join(__dirname,"../public"))
app.use(express.static(static_path));

app.set("view engine","hbs")
app.set("views", template_path);
hbs.registerPartials(partial_path);

app.get("/",(req,res)=>{
    res.render("index");
});
// app.get("/register",(req,res)=>{
//     res.render("register");
// });
// app.get("/login",(req,res)=>{
//     res.render("login");
// });
// app.get("/templates/partials.header",(req,res)=>{
//     res.render("navbar");
// })
app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})