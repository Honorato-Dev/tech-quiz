import Layout from "@/components/Layout"
import { Alfa_Slab_One } from "next/font/google"
import Link from "next/link"

const alfa = Alfa_Slab_One({
  subsets: ['latin'],
    weight: ['400'],
})

const Home = () => {
 


  return (
   <Layout>
     <div className="flex justify-center mx-auto ">
      <div className="flex flex-row justify-center">

          <div className={alfa.className}>
        <h1 className="text-xl md:text-3xl lg:text-5xl text-center  text-white ">Bem-vindo ao Tech Quiz!</h1>
        <h2 className="text-xl md:text-3xl lg:text-5xl text-center text-white "> Explore o Universo da Tecnologia.</h2>
      </div>
      </div>
    
      
      <h2></h2>

     </div>
   </Layout>
  )
}


export default Home