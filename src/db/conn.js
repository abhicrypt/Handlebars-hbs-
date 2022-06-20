const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/prostack")
.then(()=>{
    console.log(`connection 1successful`);

}).catch((err)=>{
    console.log(`no connection`)
})