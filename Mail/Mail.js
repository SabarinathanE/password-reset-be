import { createTransport } from "nodemailer";
//using nodemailer to send mail for resetting password
//creating transport
export const transporter = createTransport({
  service: "gmail",
  auth: {
    user: "sabarielangovan13@gmail.com",
    pass: "password@123randomstuff",
  },
});