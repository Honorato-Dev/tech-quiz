import Layout from '@/components/Layout';
import { Alfa_Slab_One } from 'next/font/google';
import Link from 'next/link';

const alfa = Alfa_Slab_One({
  subsets: ['latin'],
  weight: ['400'],
});

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-8  justify-center mx-auto ">
        <div className="flex flex-col justify-center">
          <div className={alfa.className}>
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-center  text-white ">
              Bem-vindo ao Tech Quiz!
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-5xl text-center text-white mb-10">
              {' '}
              Explore o Universo da Tecnologia.
            </h2>
          </div>
          <p className="text-lg md:text-xl lg:text-2xl text-center  text-white mt-11 mb-4">
            No Tech Quiz, sua jornada pelo vasto universo da tecnologia começa
            aqui! Somos um destino online que se aprofunda nas profundezas do
            conhecimento digital, oferecendo um espaço dinâmico e interativo
            para testar suas habilidades nas principais linguagens de tecnologia
            utilizadas atualmente. Este é o lugar onde entusiastas,
            profissionais da área e curiosos se encontram para explorar,
            aprender e aprimorar suas habilidades no mundo digital.
          </p>
          <div className="text-center mb-20 mt-20">
            <Link
              className="font-bold py-7 px-7 rounded-md bg-blue-500 text-white bg-blue-700;"
              href="/getstarted"
            >
              Get Started
            </Link>
          </div>
          
        </div>
        
        <div className="flex flex-col  lg:flex-row  lg:space-x-16 justify-center">
          
            <div className="bg-white bg-opacity-70 w-[] h-[350px] mt-4 rounded-md lg:w-[680px] lg:h-[450px] ">teste</div>
            <div className="bg-white bg-opacity-70 w-[] h-[350px] mt-4 rounded-md lg:w-[680px] lg:h-[450px]">teste</div>
          
        </div>
        
      </div>
    </Layout>
  );
};

export default Home;
