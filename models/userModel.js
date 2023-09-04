const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"please enter the username"],
    },

    email:{
        type:String,
        required:[true,"please enter the email id"],
        unique:[true,"email id already taken"],
    },

    password:{
        type:String,
        required:[true,"please enter the password"],
    },
},{
    timestamps:true,
});

module.exports=mongoose.model("user",userSchema);