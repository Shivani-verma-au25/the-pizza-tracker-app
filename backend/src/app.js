import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express();

// middlewares

app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true,
}))

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())



// routes imports
import userRouter from './routes/user.routes.js'
app.use('/api/v1/users',userRouter)

export {app};

