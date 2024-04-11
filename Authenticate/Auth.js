import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
//just used to learning purpose and not used in this task
export function generateToken(id){
    return jwt.sign({id},process.env.SECRET_KEY);
} 

//custom authorization middleware

export function isAuthorized(req,res,next){
       const token=req.headers["x-auth-token"];
       if(!token){
        return res.status(400).json({error:"Access denied"})
       }
       //comparing and verifying
       jwt.verify(token,process.env.SECRET_KEY);
       next();
}

//use isAuthorized for verifiying token otherwise if will send access denied