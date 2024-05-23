import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//LoginUser
const loginUser = async (req,res) => {
  const {email, password} = req.body;
  try {
    const user = await userModel.findOne({email})
    if(!user){
      return res.json({success:false,message:"User Doensn't exist"})
    }
    
    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
      return res.json({success:false,message:"Invalid credentials"})
    }
    const token = createToken(user._id);
    res.json({success:true,token})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
  }
} 

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET) 
}

//Register
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;

  try {
    //Checking if the user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }
    // validating email format && strong password

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedpassword,
    });

    try {
      const user =  await newUser.save();
      const token = createToken(user._id);
      res.json({success:true,token});
    } catch (error) {
      console.log(error);
      res.json({success:false,message:"Error"});
      }
  } catch (error) {}
};

const UserList = async (req, res) => {
try {
  const user = await userModel.find({})
  res.json({success:true,user});
} catch (error) {
  console.log(error)
  res.json({success:false,message:"Error"})
}
};

const getUser = async (req,res) => {
  const {userId} = req.body;

try {
  const user = await userModel.findById(userId);
  const userData = await user.save();
  res.json({success:true,userData})
} catch (error) {
  console.log(error);
  res.json({success:false,message:"Error"})
}
}

export { loginUser, registerUser,UserList ,getUser};
