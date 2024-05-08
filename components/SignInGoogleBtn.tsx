import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import React from 'react'

function SignInGoogleBtn() {
  const { data: session } = useSession()
 
 
    if(session){
   return (
              // <button onClick={() => signOut()}>Sign out</button>
              <button onClick={()=> signOut()} className='flex items-center m-1  gap-4 shadow-xl rounded-none'>
       <Image src='/images/google-logo.png'  alt='Google Logo' width={30} height={30}/>
       <span className='bg-blue-500 w-full rounded-none p-4  text-white px-4 scroll-py-3'>
        Conected
       </span>
    </button>


   )

    }
    return (

      <button onClick={()=> signIn()} className='flex items-center m-1  gap-4 shadow-xl rounded-none'>
       <Image src='/images/google-logo.png'  alt='Google Logo' width={30} height={30}/>
       <span className='bg-blue-500 w-full rounded-none p-4  text-white px-4 scroll-py-3'>
        Sign-in with Google
       </span>
    </button>
    )
   
  
}

export default SignInGoogleBtn
