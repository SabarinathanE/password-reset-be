import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import { Router } from "./Routes/index.js";

dotenv.config();

//initializing server
const app=express();
  
//middlewares
app.use(express.json());
app.use(cors());

//initializing PORT
const PORT=process.env.PORT;
const HOST=process.env.HOST;

//routes
app.use("/",Router);

//listening to the server
app.listen(PORT, HOST, ()=> {
    console.log("Server Started in: " ,PORT)
});