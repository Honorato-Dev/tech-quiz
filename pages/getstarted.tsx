import Layout from '@/components/Layout';
import React from 'react';
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { TbBrandLaravel } from "react-icons/tb";
import { FaRust } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaSwift } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import Link from 'next/link';



const GetStarted = () => {
  return (
    <Layout title="Get Started">
      <div className="flex h-screen flex-col justify-center">
        <div className="flex flex-row justify-center">
          <div className='grid grid-cols-4 gap-2 md:grid-cols-4 lg:grid-cols-6'>
            <Link href='/login?redirect=/javascript' >
              <div className='flex flex-col text-center hover:scale-125 transition duration-500'><SiJavascript className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /><p className='font-semibold text-sm lg:text-lg'>Javascript</p></div>
            </Link>
          
          <Link href='/login?redirect=/node' >
            <div className='flex flex-col text-center '><SiNodedotjs className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /> <p className='font-semibold text-sm lg:text-lg'>Node</p></div>
          </Link>
          
          <Link href='/login?redirect=/java' >
            <div className='flex flex-col text-center'><FaJava className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /> <p className='font-semibold text-sm lg:text-lg'>Java</p></div>
          </Link>
          
          <Link href='/login?redirect=/spring' >
            <div className='flex flex-col text-center'><SiSpring className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /><p className='font-semibold text-sm lg:text-lg'>Spring</p></div>
          </Link>
          
          <Link href='/login?redirect=/python' >
            <div className='flex flex-col text-center'><SiPython className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /><p className='font-semibold text-sm lg:text-lg'>Python</p></div>
          </Link>
          
          <Link href='/login?redirect=/django' >
            <div className='flex flex-col text-center'><SiDjango className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /><p className='font-semibold text-sm lg:text-lg'>Django</p></div>
          </Link>
          
          <Link href='/login?redirect=/php' >
            <div className='flex flex-col text-center'><SiPhp className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /><p className='font-semibold text-sm lg:text-lg'>PHP</p></div>
          </Link>
          
          <Link href='/login?redirect=/laravel' >
            <div className='flex flex-col text-center'><TbBrandLaravel className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5'/><p className='font-semibold text-sm lg:text-lg'>Laravel</p></div>
          </Link>
          
          <Link href='/login?redirect=/rust' >
            <div className='flex flex-col text-center'><FaRust className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /><p className='font-semibold text-sm lg:text-lg'>Rust</p></div>
          </Link>
          <Link href='/login?redirect=/golang' >
            <div className='flex flex-col text-center'><FaGolang className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /><p className='font-semibold text-sm lg:text-lg'>GO</p></div>
          </Link>
          
          <Link href='/login?redirect=/react' >
            <div className='flex flex-col text-center'><FaReact className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5'/><p className='font-semibold text-sm lg:text-lg'>React</p></div>
          </Link>
          
          <Link href='/login?redirect=/angular' >
            <div className='flex flex-col text-center'><FaAngular className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5'/><p className='font-semibold text-sm lg:text-lg'>Angular</p></div>
          </Link>

          <Link href='/login?redirect=/wordpress' >
            <div className='flex flex-col text-center'><FaWordpress className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5'/><p className='font-semibold text-sm lg:text-lg'>Wordpress</p></div>
          </Link>

          <Link href='/login?redirect=/swift' >
            <div className='flex flex-col text-center'><FaSwift className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /><p className='font-semibold text-sm lg:text-lg'>Swift</p></div>
          </Link>

          <Link href='/login?redirect=/mongodb' >
            <div className='flex flex-col text-center'><SiMongodb className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /><p className='font-semibold text-sm lg:text-lg'>MongoDB</p></div>
          </Link>

          <Link href='/login?redirect=/linux' >
           <div className='flex flex-col text-center'><FaLinux className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /><p className='font-semibold text-sm lg:text-lg'>Linux</p></div>
          </Link>

          <Link href='/login?redirect=/csharp' >
           <div className='flex flex-col text-center'><SiCsharp className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5'/><p className='font-semibold text-sm lg:text-lg'>C#</p></div>
          </Link>

          <Link href='/login?redirect=/dotnet' >
           <div className='flex flex-col text-center'><SiDotnet className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5'/><p className='font-semibold text-sm lg:text-lg'>.NET</p></div>
          </Link>

          
          {/* <Link href='/' >
           <div className='flex'></div>
          </Link> */}
          

          </div>
         
        </div>
      </div>
    </Layout>
  );
};

export default GetStarted;
