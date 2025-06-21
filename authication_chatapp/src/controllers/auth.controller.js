import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cloudinary from "../lib/cloudinary.js";


// ✅ Proper token generator
const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long." });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    generateToken(newUser._id, res);

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const login = async (req, res) => {
  // ✅ Handle undefined req.body safely
  const { email, password } = req.body || {};

  try {
    // ✅ Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    });

  } catch (error) {
    console.log("Error in login controller:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const logout = (req, res) => {
  try{
res.cookie("jwt","",{maxAge:0})
res.status(200).json({message:"logout successfully"});
  }catch(error){
console.log("error in logout controller",error.message);
res.status(500).json({message:"internal server error"});
  }
};


export const updateProfile =async(req,res)=>{
  try {
const {profilePic} = req.body;
 const userId=req.user._id;
 if(!profilePic){
  return res.status(400).json({message:"profile pic is required"});
 }
 const uploadResponse = await cloudinary.uploader.upload(profilePic);


 const updatedUser = await User.findByIdAndUpdate(
  userId,{profilePic:uploadResponse.secure_url}
  ,{new:true}
);

 res.status(200).json(updatedUser);
  } catch(error){
    console.log("error in update profile:",error);
    res.status(500).json({message:"internal server error"});

  }

};


export const checkAuth = (req,res) =>{
  try{
    res.status(200).json(req.user);
  }catch(error){
    console.log("error in checkAuth controller",error.message);
    res.status(500).json({message:"internal server error"});
  }
}