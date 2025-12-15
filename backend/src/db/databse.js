import mongoose from "mongoose";

export const connectToDb = async ()=>{
    try {
        const connectioInstnace = await mongoose.connect(process.env.DATABSE_URL);
        console.log("DataBase connected successfully to ",connectioInstnace.connection.host);

    } catch (error) {
        console.log("Error getting while connecting to the database ",error);
        process.exit(1);  
    }
}