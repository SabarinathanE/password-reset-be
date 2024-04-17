import { createTransport } from "nodemailer";
import dotenv from 'dotenv';
//using nodemailer to send mail for resetting password
//creating transport
export const transporter = createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: process.env.Email,
    pass: "xsmtpsib-9c5c432c7b55fc0cd4dc62dfadfa53780b4b85d91d50d5c0fb5c954ab83fdc84-XRvA3d9xsQHtOzEj",
  },
});
