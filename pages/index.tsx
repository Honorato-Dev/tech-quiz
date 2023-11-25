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
      <div className="flex flex-col justify-center">

          <div className={alfa.className}>
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-center  text-white ">Bem-vindo ao Tech Quiz!</h1>
        <h2 className="text-2xl md:text-3xl lg:text-5xl text-center text-white mb-10"> Explore o Universo da Tecnologia.</h2>
      </div>
      <p className="text-lg md:text-xl lg:text-2xl text-center  text-white mt-11">
      No Tech Quiz, sua jornada pelo vasto universo da tecnologia começa aqui! Somos um destino online que se aprofunda nas profundezas do conhecimento digital, oferecendo um espaço dinâmico e interativo para testar suas habilidades nas principais linguagens de tecnologia utilizadas atualmente. Este é o lugar onde entusiastas, profissionais da área e curiosos se encontram para explorar, aprender e aprimorar suas habilidades no mundo digital.
      </p>
      </div>
    
      
      <h2></h2>

     </div>
   </Layout>
  )
}


export default Home