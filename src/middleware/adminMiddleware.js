const jwt = require('jsonwebtoken')
const User = require('../models/user')
const redisClient = require('../config/redis')
const { adminRegister } = require('../controllers/userAuthent')
const adminMiddleware = async(req, res, next) => {
    try{
        
        const {token} = req.cookies
        
        if(!token)
            throw new Error("Unauthorized Access")

        const payload = jwt.verify(token, process.env.JWT_KEY)
        const {_id} = payload

        if(!_id)
            throw new Error("Invalid Token")

        const result = await User.findById(_id)

        if(payload.role != "admin")
            throw new Error("Unauthorized Access")

        if(!result)
            throw new Error("User Not Found") 

        const IsBlocked = await redisClient.exists(`token:${token}`)
        if(IsBlocked)
            throw new Error("Invalid Token")

        req.user = result
        next()
    }
    catch(err){
        res.send("Error: " + err.message)
    }
}

module.exports = adminMiddleware