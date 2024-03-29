const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name us require']

    },
    email:{
        type:String,
        required:[true,"email is require"]
    },
    password:{
        type:String,
        require:[true,'password is require']
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isDoctor: {
        type:Boolean,
        default:false
    },
    notifcation :{
        type:Array,
        default:[]
    },
    seennotification:{
       type:Array,
       default:[],   
    },
});

const userModel=mongoose.model("users",userSchema);
module.exports=userModel;