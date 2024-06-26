import db from "@/utils/db";
import User from "@/models/User";
import Env from "@/config/env";
import Cryptr from "cryptr";
import cryptoRandomString from "crypto-random-string";
import ForgotPasswordEmail from "@/emails/ForgotPasswordEmail";
import { sendEmail } from "@/config/mail";

import { render } from "@react-email/render";



 
export default async function POST(req:any, res:any) {
  // eslint-disable-next-line no-undef
  const payload:ForgotPasswordPayload = await req.body;
  if(req.method !== 'POST') {
    return;
 }
  // const { email }:any = await request.body;

  // * Check user email first
  await db.connect();
  const user = await User.findOne({ email: payload.email });
  if (user == null) {
    res.status(422).json({message: 'Usuário inexistente!'},console.log('out'));
    await db.disconnect();
    return;
  }
  

  
 

  //   * Generate random string
  const randomStr = cryptoRandomString({
    length: 64,
    type: "alphanumeric",
  });

  user.password_reset_token = randomStr;
  await user.save();

  // * Encrypt user email
  const crypt = new Cryptr(Env.SECRET_KEY);
  const encryptedEmail = crypt.encrypt(user.email);
  
  const url = `${Env.APP_URL}/reset-password/${encryptedEmail}?signature=${randomStr}&mail=${encryptedEmail}`;
  console.log(url)

  try {
    const html =  render(
      ForgotPasswordEmail({
        params: {
          name: user.name,
          email: user.email,
          url: url,
        },
      })
    );
    

    // * Send email to user
    await sendEmail(payload.email, "Reset Password", html);
    return res.json({
      status: 200,
      message: "Email enviado com sucesso. Por favor, verifique seu email.",
    });
  } catch (error) {
    console.log("the error is", error);
    return res.json({
      status: 500,
      message: "Algo deu errado, por favor tente novamente!",
    });
  }
}