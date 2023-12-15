const nodemailer = require("nodemailer");
import Env from '@/config/env'

export const transporter = nodemailer.createTransport({
    host: Env.SMPTP_HOST,
    port: Env.SMPTP_PORT,
    secure: Env.SMPTP_SECURE,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: Env.SMPTP_USER,
      pass: Env.SMPTP_PASSWORD,
    },
  });