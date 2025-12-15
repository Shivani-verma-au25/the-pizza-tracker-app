import dotenv from 'dotenv'
dotenv.config();
import { app } from './src/app.js';
import { connectToDb } from './src/db/databse.js';


const port = process.env.PORT || 8000;

connectToDb().then(()=>{
    app.listen(port ,()=> {
    console.log(`Server is running on port ${port}`);
    })
}).catch((error)=>{
    console.log("Failed to connect to the database ",error);
})

