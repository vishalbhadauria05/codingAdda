const User = require("../models/user")
const validate = require("../utilis/validator")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async(req,res) => {
    try{
        // validate the data
        validate(req.body)
        const {firstName, emailId, password} = req.body;

        req.body.password = await bcrypt.hash(password, 10)

       
        const user =await User.create(req.body)
        const token = jwt.sign({_id:user._id, emailId:user.emailId}, process.env.JWT_KEY, {expiresIn: 60*60})
        res.cookie("token", token, {maxAge: 60*60*1000})
        res.status(201).send("User Registered Successfully")

    }
    catch(err){
        res.status(400).send("Error: "+err)
    }
}

const login = async(req,res) => {
    try{
        const {emailId, password} = req.body;
        
        if(!emailId || !password)
            throw new Error("Email Id and Password is required")

        const user = await User.findOne({emailId})
        
        const match = await bcrypt.compare(password, user.password) 
        
        if(!match)
            throw new Error("Invalid Credentials")
        
        const token = jwt.sign({_id:user._id, emailId:user.emailId}, process.env.JWT_KEY, {expiresIn: 60*60})
        res.cookie("token", token, {maxAge: 60*60*1000})
        res.status(200).send("Login Successful")

    }   
    catch(err){
        res.status(401).send("Error: "+err)
    }     
}


const logout = async(req,res) => {
    try{

    }
    catch(err){
        
    }
}