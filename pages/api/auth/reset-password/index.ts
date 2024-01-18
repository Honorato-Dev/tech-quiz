import  User  from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import Cryptr from "cryptr";
import Env from "@/config/env";
import db from "@/utils/db";
import bcrypt from "bcryptjs";



export default async function POST(req: NextRequest) {
  
  console.log('eu aqui oh')
  
  // eslint-disable-next-line no-undef
  const payload: ResetPasswordPayload = await req.json();
  // eslint-disable-next-line no-undef
  //const payload: any = await req.body;

  // TODO: You have to add validation here to check both passwords are same
  console.log('eu aqui oh2')
  console.log('payload: ',payload)
  // * Decrypt string
  const crypter = new Cryptr(Env.SECRET_KEY);
  console.log('eu aqui oh3')
  console.log(crypter)
  const email = crypter.decrypt(payload.email);
  console.log('erro aqui 4')
  
  await db.connect();
  const user = await User.findOne({
    email: email,
    password_reset_token: payload.signature,
  });
  
  if (user == null || user == undefined) {
    return NextResponse.json({
      status: 400,
      message: "Reset url is not correct. pls double check it .",
    });
    
  }

  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(payload.password, salt);
  user.password_reset_token = '';
  await user.save();

  return NextResponse.json({
    status: 200,
    message: "Password changed successfully. please login with new password.",
  });
}