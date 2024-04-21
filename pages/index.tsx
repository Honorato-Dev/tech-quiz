
import { Alfa_Slab_One } from 'next/font/google';
import Link from 'next/link';
import IntroductionScreen from './introduction';
import Layout from '@/components/Layout';

const alfa = Alfa_Slab_One({
  subsets: ['latin'],
  weight: ['400'],
});

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-8  justify-center mx-auto ">
        <div className="flex flex-col justify-center lg:mt-24 lg:mb-24">
          <div className={alfa.className}>
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-center   ">
              Bem-vindo ao <span className='bg-gradient-to-l from-green-400 to-cyan-400 text-transparent bg-clip-text'>Tech Quiz!</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-5xl text-center  mb-10">
              {' '}
              Explore o Universo da Tecnologia.
            </h2>
          </div>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center   mt-11 mb-4">
            No Tech Quiz, sua jornada pelo vasto universo da tecnologia começa
            aqui! Somos um destino online que se aprofunda nas profundezas do
            conhecimento digital, oferecendo um espaço dinâmico e interativo
            para testar suas habilidades nas principais linguagens de tecnologia
            utilizadas atualmente. Este é o lugar onde entusiastas,
            profissionais da área e curiosos se encontram para explorar,
            aprender e aprimorar suas habilidades no mundo digital.
          </p>
          <div className="text-center hover:animate-bounce   mb-20 mt-20">
            <Link
              className="font-bold py-7 px-7 rounded-sm bg-blue-500  bg-blue-700;"
              href="/getstarted"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2   lg:flex-row  lg:space-x-16 justify-center ">
          <div className="   bg-opacity-70 w-[] h-[350px] mt-4 rounded-md lg:w-[680px] lg:h-[450px] ">
            <p className="flex   font-semibold text-base lg:text-2xl">
              Responder a um questionário de tecnologia pode oferecer uma série
              de vantagens significativas no contexto da evolução de carreira.
              Em um mundo cada vez mais orientado pela inovação e digitalização,
              demonstrar habilidades e conhecimentos tecnológicos é essencial
              para o crescimento profissional. Ao participar ativamente de
              questionários sobre tecnologia, os profissionais podem colher
              benefícios como:
            </p>
          </div>
          <div className=" p-4 space-y-3 bg-opacity-70  mt-4 rounded-md lg:w-[680px] lg:h-[450px]">
            <p className="flex font-semibold p-1 text-sm lg:text-base">
              <span className={alfa.className}>
                <span className="mr-4 text-lg lg:text-xl  font-normal ">
                  Atualização de Conhecimentos:
                </span>
              </span>{' '}
              Ao responder perguntas sobre tecnologia, os profissionais são
              desafiados a revisar e atualizar seus conhecimentos. Isso é vital
              em um cenário onde a tecnologia evolui rapidamente, garantindo que
              as habilidades estejam alinhadas com as demandas do mercado.
            </p>
            <p className="flex font-semibold p-1 text-sm lg:text-base">
              <span className={alfa.className}>
                <span className="mr-4 text-lg lg:text-xl  font-normal ">
                  Destaque no Mercado:
                </span>
              </span>
              Participar ativamente de questionários de tecnologia pode destacar
              um profissional no mercado de trabalho. Isso demonstra
              proatividade, interesse em aprender e adaptabilidade,
              características valorizadas por empregadores que buscam talentos
              capazes de acompanhar as mudanças tecnológicas.
            </p>
            <p className="flex font-semibold p-1 text-sm lg:text-base">
              <span className={alfa.className}>
                <span className="mr-4 text-lg lg:text-xl  font-normal ">
                  Networking e Oportunidades:
                </span>
              </span>
              Muitos questionários de tecnologia são promovidos por comunidades
              e empresas do setor. Ao participar, os profissionais têm a chance
              de expandir sua rede de contatos, interagindo com colegas, líderes
              e especialistas. Isso pode resultar em novas oportunidades de
              emprego, colaborações e parcerias.
            </p>

            <p></p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-2 mt-10 lg:mt-4   lg:flex-row  lg:space-x-16 justify-center">
          <div className="  p-4 space-y-3  bg-opacity-70   lg:mt-4 rounded-md lg:w-[680px] lg:h-[450px] ">
            <p className="flex font-semibold p-1 ml-1 text-sm lg:text-base">
              <span className={alfa.className}>
                <span className="flex mr-4 pr-2 text-lg lg:text-xl  font-normal ">
                  Certificação Informal:
                </span>
              </span>
              Responder a questionários de tecnologia pode servir como uma forma
              de certificação informal. Os resultados obtidos podem ser
              compartilhados em perfis profissionais online, como o LinkedIn,
              evidenciando o nível de conhecimento e competência do profissional
              em determinadas áreas tecnológicas.
            </p>
            <p className="flex font-semibold p-1 text-sm lg:text-base">
              {' '}
              <span className={alfa.className}>
                <span className="flex mr-4 text-lg lg:text-xl  font-normal ">
                  Autoavaliação e Desenvolvimento Pessoal:
                </span>
              </span>{' '}
              Os questionários proporcionam uma oportunidade para autoavaliação.
              Ao identificar áreas de conhecimento que precisam de
              aprimoramento, os profissionais podem criar planos de
              desenvolvimento pessoal direcionados, focando em melhorar
              habilidades específicas.
            </p>
            <p className="flex font-semibold p-1 text-sm lg:text-base">
              <span className={alfa.className}>
                <span className="flex mr-4 text-lg lg:text-xl  font-normal ">
                  Acesso a Recursos Educacionais:
                </span>
              </span>
              Muitos questionários de tecnologia estão associados a recursos
              educacionais, como webinars, cursos online e material de estudo.
              Ao participar desses questionários, os profissionais podem acessar
              oportunidades adicionais de aprendizado que contribuem para sua
              formação contínua.
            </p>
          </div>
          <div className="  bg-opacity-70 w-[] h-[650px] mt-4 mb-10 rounded-md lg:w-[680px] lg:h-[450px] ">
            <IntroductionScreen />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
