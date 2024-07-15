import express from "express"
import cors from "cors"
import { connectDB } from './config/db.js'
import foodRouter from "./routes/foodRoutes.js"
import { userRouter } from "./routes/userRoutes.js"
import "dotenv/config"



//app config

const app = express()
const port = 4000


// middleware
app.use(express.json())
app.use(cors())


//db connection
connectDB();

// API enpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("api/user", userRouter)


app.get("/", (req, res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

//mongodb+srv://anjanaindu3699:803391@cluster0.w2zqwgy.mongodb.net/?