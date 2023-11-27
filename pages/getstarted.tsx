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
      <div className="flex  flex-col justify-center">
        <div className="flex flex-row justify-center">
          <div className='grid grid-cols-4 gap-2 md:grid-cols-4 lg:grid-cols-6'>
            <Link href='/javascript' >
              <div className='flex '><SiJavascript className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /></div>
            </Link>
          
          <Link href='/node' >
            <div className='flex'><SiNodedotjs className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /></div>
          </Link>
          
          <Link href='/java' >
            <div className='flex'><FaJava className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /></div>
          </Link>
          
          <Link href='/spring' >
            <div className='flex'><SiSpring className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /></div>
          </Link>
          
          <Link href='/python' >
            <div className='flex'><SiPython className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /></div>
          </Link>
          
          <Link href='/django' >
            <div className='flex'><SiDjango className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /></div>
          </Link>
          
          <Link href='/php' >
            <div className='flex'><SiPhp className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /></div>
          </Link>
          
          <Link href='/laravel' >
            <div className='flex'><TbBrandLaravel className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5'/></div>
          </Link>
          
          <Link href='/rust' >
            <div className='flex'><FaRust className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /></div>
          </Link>
          <Link href='/golang' >
            <div className='flex'><FaGolang className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /></div>
          </Link>
          
          <Link href='/react' >
            <div className='flex'><FaReact className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5'/></div>
          </Link>
          
          <Link href='/angular' >
            <div className='flex'><FaAngular className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5'/></div>
          </Link>

          <Link href='/wordpress' >
            <div className='flex'><FaWordpress className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5'/></div>
          </Link>

          <Link href='/swift' >
            <div className='flex'><FaSwift className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /></div>
          </Link>

          <Link href='/mongodb' >
            <div className='flex'><SiMongodb className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /></div>
          </Link>

          <Link href='/linux' >
           <div className='flex'><FaLinux className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' /></div>
          </Link>

          <Link href='/csharp' >
           <div className='flex'><SiCsharp className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5'/></div>
          </Link>

          <Link href='/dotnet' >
           <div className='flex'><SiDotnet className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5'/></div>
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
