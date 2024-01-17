import News from "@/models/News";
import Product from "@/models/Product";
import Service from "@/models/Service";
import User from "@/models/User";
import Vacancy from "@/models/Vacancy";

import data from "@/utils/data";
import db from "@/utils/db"

const handler = async (req:any, res:any) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await News.deleteMany();
  await News.insertMany(data.news);
  await Service.deleteMany();
  await Service.insertMany(data.services);
  await Vacancy.deleteMany();
  await Vacancy.insertMany(data.vacancies);
  await db.disconnect();
  res.send({message: 'seeded successfully'})

};
export default handler;