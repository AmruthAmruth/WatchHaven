import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express();
const PORT = 5000;

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);