import userModel from "../models/userModel";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

//login user

const loginUser = async (req,res) => {

}

//register user
const registerUser = async (req, res) => {
    const { name, password, email} = req.body;
    try {
        const exists = await userModel.findOne({email})
        if(exists){
            return res.jason({success:false,message:"User already exists"})
        }

        //validate email format, stromg pw

        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Invalid Email"})

        }

        if(password.length<8){
            return res.json({success:false,message:"Password too short"})
        }
    } catch (error) {
        
    }
}


