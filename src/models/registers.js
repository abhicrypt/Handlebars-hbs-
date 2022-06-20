const mongoose =require("mongoose");
const employeeSchema=new mongoose.Schema({ 
    email:{
        type : String,
        require:true
     },
    password:{
        type : String,
        require:true
    },
    confirmpassword:{
         type : String,
         require:true
     }
})

//create collection
const Register =new mongoose.model("Register",employeeSchema);
module.exports =Register; 