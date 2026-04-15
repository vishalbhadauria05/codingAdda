const express = require('express')
const app = express()
require('dotenv').config()
const main = require('./config/db')
const cookieParser = require('cookie-parser')   
const authRouter = require("./routes/userAuth")
const redisClient = require('./config/redis')

app.use(express.json())
app.use(cookieParser())
app.use("/user", authRouter)

// main()
// .then(async () => {
//     app.listen(process.env.PORT, () => {
//         console.log("Server is running on port : " + process.env.PORT)
//     })
// })
// .catch((err) => {
//     console.log("Error while connecting to database : " + err)
// })

const InitiaizeConnection = async() => {
    try{
        await Promise.all([main()],redisClient.connect())
        console.log("Connected to database and redis successfully")  
        app.listen(process.env.PORT, () => {
        console.log("Server is running on port : " + process.env.PORT)
    })
    }
    catch(err){
        console.log("Error while connecting to database or redis : " + err) 
    }
}

InitiaizeConnection()