import dotenv from 'dotenv'
dotenv.config();
import { app } from './src/app.js';
import { connectToDb } from './src/db/databse.js';
import http from 'http'
import { Server } from 'socket.io';


const port = process.env.PORT || 8000;

//  http + socket

// server 
const server = http.createServer(app);

// socket
const io = new Server(server ,{
    cors :{
        origin : `http://localhost:5173`,
        credentials : true
    }
});

console.log("🔥 Socket server initialized");

//  set to global variable
global.io = io;

io.on('connection',(socket) =>{
    console.log("Socket connected :",socket.id);

    socket.on("joinOrderRoom" , (orderId)=>{
        socket.join(orderId);
    })
});


//  databse connection 
connectToDb().then(()=>{
    server.listen(port ,()=> {
    console.log(`Server + Socket running on port ${port} ${port}`);
    })
}).catch((error)=>{
    console.log("Failed to connect to the database ",error);
})


