import db from "@/utils/db";
import User from "@/models/User";
let bcrypt = require('bcryptjs');
import Env from "@/config/env";
import Cryptr from "cryptr";
import cryptoRandomString from "crypto-random-string";
import ForgotPasswordEmail from "@/emails/ForgotPasswordEmail";
import { sendEmail } from "@/config/mail";
import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
 
const handler = async(req:any,res:any) => {
    const payload: ForgotPasswordPayload = await req.body


 await db.connect();
 const  existingUser = await User.findOne({email: payload.email})
 if (!existingUser || null) {
    res.status(422).json({message: "No user found with this email."});
    await db.disconnect();
    return;
 }
 const randomStr = cryptoRandomString({
    length: 64,
    type: "alphanumeric",
  });

  existingUser.password_reset_token = randomStr;
  await existingUser.save()

   // * Encrypt user email
   const crypt = new Cryptr(Env.SECRET_KEY);
   const encryptedEmail = crypt.encrypt(existingUser.email);
 
   const url = `${Env.APP_URL}/reset-password/${encryptedEmail}?signature=${randomStr}`;

   try {
    const html = render(
      ForgotPasswordEmail({
        params: {
          name: existingUser.name,
          url: url,
        },
      })
    );

    // * Send email to user
    await sendEmail(payload.email, "Reset Password", html);
    return NextResponse.json({
      status: 200,
      message: "Email sent successfully.please check your email.",
    });
  } catch (error) {
    console.log("the error is", error);
    return NextResponse.json({
      status: 500,
      message: "Something went wrong.please try again!",
    });
  }




}
export default handler;