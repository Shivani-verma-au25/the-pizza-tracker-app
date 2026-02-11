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
import pizzaRouter from './routes/pizza.routes.js'
import userOrderRouter from './routes/userOrder.routes.js'
import adminOrderRouter from './routes/adminOrder.routes.js'
import cartRouter from './routes/cart.routes.js'

app.use('/api/v1/users',userRouter)
app.use('/api/v1/pizza', pizzaRouter)
app.use('/api/v1/order', userOrderRouter)
app.use('/api/v1/admin', adminOrderRouter)
app.use('/api/v1/cart', cartRouter)

export {app};

