import React, { useEffect, useState } from 'react'
import {hasCookie, setCookie} from "cookies-next"
import Link from 'next/link'
const CookiesConsent = () => {

    const [showConsent, setShowConsent] = useState(true)

    useEffect(()=>{
     setShowConsent(hasCookie("localConsent"))
    },[])

    const acceptCookie = () => 
    {
        setShowConsent(true)
        setCookie("localConsent", "true",{})
    }

    if(showConsent)
    {
        return null;
    }


  return (
    <div className='fixed insert-0 bg-slate-700 bg-opacity-70 z-[5000]'>
        <div className='fixed bottom-0 left-0 flex items-center justify-between px-4 py-8 bg-[#a7987e] text-white'>
            <span className='text-black text-base mr-16 '>
            This website uses cookies to ensure you get the best experience on our website.<Link href="/privacy-policy" className='font-bold '>Privacy Policy</Link>
            </span>

            <button className='bg-indigo-700 text-white py-2 px-10 rounded' onClick={() => acceptCookie()}>
                Accept
            </button>
        </div>
    </div>
  )
}

export default CookiesConsent
