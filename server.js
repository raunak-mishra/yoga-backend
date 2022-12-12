//Import all dependencies,frameworks,models,routes
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const CORS=require('cors')
const PORT=8000|process.env.PORT
const hostname="localhost"
const userRoute=require('./Routes/userInfoRoute')
const paymentRoute=require('./Routes/paymentInfoRoute')
require('dotenv').config();

mongoose.set('strictQuery', false);
//Setup database
const DB_LINK=process.env.MONGO_URL

//Middleware
app.use(CORS({
    origin: ["http://localhost:3000", "https://yoga-frontend-sxsh.onrender.com/"],
  }))
app.use(express.json())

//Setup database
mongoose.connect(DB_LINK,{useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>{
    console.log('Database connection successful.')
}).catch((err)=>{
    console.log(err)
})




//Implement routing
app.use(userRoute);
app.use(paymentRoute)

//Start the server
app.listen(PORT,hostname,()=>{
    console.log(`Server is running on https://${hostname}:${PORT}`)
})