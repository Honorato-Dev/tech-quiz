
import User from "@/models/User";


import data from "@/utils/data";
import db from "@/utils/db"

const handler = async (req:any, res:any) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await db.disconnect();
  res.send({message: 'seeded successfully'})

};
export default handler;