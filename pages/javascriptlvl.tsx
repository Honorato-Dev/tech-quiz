import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';
import { SiJavascript } from "react-icons/si";

const JavascriptLvl = () => {
  return (
    <Layout title="Javascript lvl">
      <div className="flex h-screen flex-col justify-center">
        <div className="flex flex-row justify-center">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            <Link href="/login?redirect=/javascript">
              <div className="flex flex-col bg-white bg-opacity-50 w-44 h-44  text-center hover:scale-125 transition duration-500">
              <SiJavascript className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' />
                <p className="font-semibold text-sm lg:text-lg">Normal</p>
              </div>
            </Link>
            <Link href="/login?redirect=/javascript">
              <div className="flex flex-col  bg-white bg-opacity-50 w-44 h-44 text-center hover:scale-125 transition duration-500">
              <SiJavascript className=' w-10 h-10 md:w-16  md:h-16 lg:w-24 lg:h-24 m-5' />
                <p className="font-semibold text-sm lg:text-lg">Avançado</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JavascriptLvl;
