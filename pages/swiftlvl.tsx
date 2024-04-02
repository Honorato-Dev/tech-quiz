import Layout from '@/components/Layout'
import Link from 'next/link';
import React from 'react'
import {FaSwift  } from "react-icons/fa";

const SwiftLvl = () => {
  return (
    <Layout title='Java lvl'>
       <div className="flex h-screen flex-col justify-center">
        <div className="flex flex-row justify-center">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
            <Link href="/login?redirect=/dotnet">
              <div className="flex flex-col bg-white rounded-sm bg-opacity-50 w-96 h-96  text-center hover:scale-125 transition duration-500">
              <FaSwift   className='w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 m-5' />
                <p className="flex justify-center mt-20  font-semibold text-2xl lg:text-3xl lg:mt-10">Normal</p>
              </div>
            </Link>
            <Link href="/login?redirect=/dotnetadv">
              <div className="flex flex-col   bg-white rounded-sm  bg-opacity-50 w-96 h-96 text-center hover:scale-125 transition duration-500">
              <FaSwift   className=' w-10 h-10 md:w-16   md:h-16 lg:w-24 lg:h-24 m-5' />
                <p className="flex justify-center mt-20  font-semibold text-2xl lg:text-3xl lg:mt-10">Avançado</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
    </Layout>
  )
}

export default SwiftLvl