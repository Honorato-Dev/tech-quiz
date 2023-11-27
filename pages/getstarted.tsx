import Layout from '@/components/Layout';
import React from 'react';
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";



const GetStarted = () => {
  return (
    <Layout title="Get Started">
      <div className="flex  flex-col justify-center">
        <div className="flex flex-row justify-center">
          <div className='flex '><SiJavascript className='w-24 h-24' /></div>
          <div className='flex'><FaJava className='w-24 h-24' /></div>
          <div className='flex'></div>
          <div className='flex'></div>
          <div className='flex'></div>
        </div>
      </div>
    </Layout>
  );
};

export default GetStarted;
