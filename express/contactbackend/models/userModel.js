const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please add the username"],
        },
        email: {
            type :String ,
            required: [true, "Please add user email address"],
            unique: [true, "Please address already taken"],
        },
        password:{
            type:String,  
            required: [true, "Please add the  user password"],
    },
},
{timestamps: true,
}
);
module.exports = mongoose.model('User',userSchema);