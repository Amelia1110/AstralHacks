import { Schema, model, models} from "mongoose";

const UserSchema = new Schema ({
    email: {
        type: String,
        unique: true,
        required : [true, "Email is required"], 
    },

    fullName : {
        type : String,
        required : [true, "Full Name is required"]
    },

    password : {
        type: String,
        required : [true, "Password is required"],
        select : false,
    },
    
    answerOne :{
        type: String,
        required : [true, "An answer for this is required"]
    },
    answerTwo :{
        type: String,
        required : [true, "An answer for this is required"]
    },
    answerThree :{
        type: String,
        required : [true, "An answer for this is required"]
    }
})

const User = models.User || model("User", UserSchema)

export default User