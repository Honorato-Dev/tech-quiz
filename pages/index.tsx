
import { Alfa_Slab_One, Roboto_Mono } from 'next/font/google';
import Link from 'next/link';
import IntroductionScreen from './introduction';
import Layout from '@/components/Layout';

const alfa = Alfa_Slab_One({
  subsets: ['latin'],
  weight: ['400'],
});
const roboto = Roboto_Mono({
  weight: ['700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const Home = () => {
  return (
    <Layout>
      <div className={`flex flex-col space-y-8  justify-center mx-auto `&& roboto.className}>
        <div className="flex flex-col justify-center lg:mt-24 lg:mb-24">
          <div className={alfa.className}>
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-center   ">
              Welcome to <span className='bg-gradient-to-l from-green-400 to-cyan-400 text-transparent bg-clip-text'>Tech Quiz!</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-5xl text-center  mb-10">
              {' '}
              Explore the universe of technology.
            </h2>
          </div>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center   mt-11 mb-4">
            No Tech Quiz, his journey through the vast universe of technology begins
            here!We are an online destination that deepens in the depths of the
            digital knowledge, offering a dynamic and interactive space
            To test your skills in the main technology languages
            currently used.This is the place where enthusiasts,
            professionals in the field and onlookers meet to explore,
            Learn and improve your skills in the digital world.
          </p>
          <div className="text-center   mb-20 mt-20">
            <Link
              className="font-bold py-7 px-7 rounded-sm bg-blue-500 hover:bg-blue-600  bg-blue-700;"
              href="/getstarted"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2   lg:flex-row  lg:space-x-16 justify-center ">
          <div className="   bg-opacity-70 w-[] h-[350px] mt-4 rounded-md lg:w-[680px] lg:h-[450px] ">
            <p className="flex   font-semibold text-base lg:text-2xl">
             Responding to a technology questionnaire can offer a series
              significant advantages in the context of career evolution.
              In a world increasingly oriented by innovation and digitization,
              Demonstrating technological skills and knowledge is essential
              for professional growth.By actively participating in
              technology questionnaires, professionals can reap
              Benefits such as:
            </p>
          </div>
          <div className=" p-4 space-y-3 bg-opacity-70  mt-4 rounded-md lg:w-[680px] lg:h-[450px]">
            <p className="flex font-semibold p-1 text-sm lg:text-base">
              <span className={alfa.className}>
                <span className="mr-14 text-lg lg:text-xl  font-normal ">
                 Knowledge Update:
                </span>
              </span>{' '}
            By answering questions about technology, professionals are
              challenged to review and update their knowledge.This is vital
              in a scenario where technology evolves rapidly, ensuring that
              Skills are aligned with market demands.
            </p>
            <p className="flex font-semibold p-1 text-sm lg:text-base">
              <span className={alfa.className}>
                <span className="mr-10 text-lg lg:text-xl  font-normal ">
                  Highlight in the market:
                </span>
              </span>
             Actively participate in technology questionnaires can highlight
              a professional in the job market.This shows
              proactivity, interest in learning and adaptability,
              characteristics valued by employers seeking talent
              capable of accompanying technological changes.
            </p>
            <p className="flex font-semibold p-1 text-sm lg:text-base">
              <span className={alfa.className}>
                <span className="mr-4 text-lg lg:text-xl  font-normal ">
                  Networking and opportunities:
                </span>
              </span>
            Many technology questionnaires are promoted by communities
              and companies in the sector.When participating, professionals have a chance
              to expand its network of contacts, interacting with colleagues, leaders
              and experts.This can result in new opportunities for
              Employment, collaborations and partnerships.
            </p>

            <p></p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-2 mt-10 lg:mt-4   lg:flex-row  lg:space-x-16 justify-center">
          <div className="  p-4 space-y-3  bg-opacity-70   lg:mt-4 rounded-md lg:w-[680px] lg:h-[450px] ">
            <p className="flex font-semibold p-1 ml-1 text-sm lg:text-base">
              <span className={alfa.className}>
                <span className="flex mr-4 pr-2 text-lg lg:text-xl  font-normal ">
                  Informal certification:
                </span>
              </span>
             Responding to technology questionnaires can serve as a form
              informal certification.The results obtained can be
              shared on professional profiles online, such as LinkedIn,
              highlighting the level of knowledge and competence of the professional
              in certain technological areas.
            </p>
            <p className="flex font-semibold p-1 text-sm lg:text-base">
              {' '}
              <span className={alfa.className}>
                <span className="flex mr-4 text-lg lg:text-xl  font-normal ">
                  Self -assessment and personal development:
                </span>
              </span>{' '}
              The questionnaires provide an opportunity for self -assessment.
              By identifying areas of knowledge that need
              improvement, professionals can create plans for
              directed personal development, focusing on improving
              specific skills.
            </p>
            <p className="flex font-semibold p-1 text-sm lg:text-base">
              <span className={alfa.className}>
                <span className="flex mr-4 text-lg lg:text-xl  font-normal ">
                  Access to educational resources:
                </span>
              </span>
          Many technology questionnaires are associated with resources
              Educational, such as Webinars, Online Courses and Study Material.
              By participating in these questionnaires, professionals can access
              additional learning opportunities that contribute to your
              continuous formation.
            </p>
          </div>
          <div className="  bg-opacity-70 w-[] h-[650px] mt-16 mb-16 rounded-md lg:w-[680px] lg:h-[450px] ">
            <IntroductionScreen />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
