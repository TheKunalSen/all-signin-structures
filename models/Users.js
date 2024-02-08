const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{   
        type:String,
        required:true,
        unique:true

    },

    
    password: {
        type: String,
        required:[false, "please add the password"]
    }


});


const User=mongoose.model('Users',userSchema,"USERS");
module.exports=User;