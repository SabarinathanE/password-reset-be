import { createTransport } from "nodemailer";
import dotenv from 'dotenv';
//using nodemailer to send mail for resetting password
//creating transport
export const transporter = createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: process.env.Email,
    pass: process.env.Password,
  },
});