const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    __created: {
        type:Date,
        default: Date.now,
    },
    name:{
        type: String,
        required: [true, "Name is required"],
    },
    email:{
        type: String,
        required:[true, "Email is required"],
        unique: [true, "Email already Exists"],
        validate: {
            validator: function(v) {
                return /\S+@\S+\.\S+/.test(v);
            },
            message: (email) => `${email.value} is not a valid email address!`,
        },
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Password must be atleast 8 characters"],
    },
    chips:{
        type:Number,
        default: 5000,
    }
});

module.exports = mongoose.model("users", userSchema);