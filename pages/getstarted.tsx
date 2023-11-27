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



const GetStarted = () => {
  return (
    <Layout title="Get Started">
      <div className="flex  flex-col justify-center">
        <div className="flex flex-row justify-center">
          <div className='flex '><SiJavascript className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 mx-5' /></div>
          <div className='flex'><SiNodedotjs className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 mx-5' /></div>
          <div className='flex'><FaJava className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 mx-5' /></div>
          
          <div className='flex'><SiSpring className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 mx-5' /></div>
          <div className='flex'><SiPython className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 mx-5' /></div>
          <div className='flex'><SiDjango className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 mx-5' /></div>
          <div className='flex'><SiPhp className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 mx-5' /></div>
          <div className='flex'><TbBrandLaravel className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 mx-5'/></div>
          <div className='flex'></div>
        </div>
      </div>
    </Layout>
  );
};

export default GetStarted;
