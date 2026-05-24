import mongoose from "mongoose";
import validator from "validator";


const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: [true, "Fullname is required!"],
            lowercase: true
        },
        email: {
            type: String,
            unique: true,
            lowercase: true,
            validate: [validator.isEmail, "Please provide a valid email!"]
        },
        password: {
            type: String,
            required: [true, "Password is required!"],
            minLength: 6,
            maxLength: 12,
            select: false
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        },
        isVerified: {
            type: String,
            default: false
        },
        verificationCode: String
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("users", userSchema);
export default User;
