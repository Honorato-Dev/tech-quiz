import  User  from "@/models/User";
//import { NextRequest, NextResponse } from "next/server";
import Cryptr from "cryptr";
import Env from "@/config/env";
import db from "@/utils/db";
import bcrypt from "bcryptjs";



export default async function POST(req: any, res:any) {
  
  console.log('eu aqui oh')
  
  // eslint-disable-next-line no-undef
  const payload: ResetPasswordPayload = await req.body;
  // eslint-disable-next-line no-undef
  //const payload: any = await req.body;

  // TODO: You have to add validation here to check both passwords are same
  
  console.log('payload: ',payload)
  // * Decrypt string
  const crypter = new Cryptr(Env.SECRET_KEY);
  console.log('eu aqui oh3')
  
  const email = crypter.decrypt(payload.email);
  
  
  await db.connect();
  const user = await User.findOne({
    email: email,
    password_reset_token: payload.signature,
  });
  
  if (user == null || user == undefined) {
    return res.json({
      status: 400,
      message: "Algo deu errado. Por favor tente novamente .",
    });
    
  }

  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(payload.password, salt);
  user.password_reset_token = '';
  await user.save();

  return res.json({
    status: 200,
    message: "Password atualizado com sucesso. favor logar com novo password.",
  });
}