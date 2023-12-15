const nodemailer = require("nodemailer");
import Env from '@/config/env'

export const transporter = nodemailer.createTransport({
    host: Env.SMTP_HOST,
    port: Number(Env.SMTP_PORT),
    secure: Env.SMTP_SECURE,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: Env.SMTP_USER,
      pass: Env.SMTP_PASSWORD,
    },
  });

  //TO send the email

  export  const  sendEmail = async (

     to:string,
 subject:string,
 html:string,
  ) : Promise<string|null> => {
    const info = await transporter.sendEmail({
    from:Env.EMAIL_FROM,
    subject:subject,
    html:html
    })
    return info?.messageId;
  }
 
  