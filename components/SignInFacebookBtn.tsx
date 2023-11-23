import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import React from 'react'

function SignInFacebookBtn() {
  const { data: session } = useSession()
 
 
    if(session){
   return (
              <button onClick={() => signOut()}>Sign out</button>


   )

    }
    return (

      <button onClick={()=> signIn()} className='flex items-center m-1 gap-4 shadow-xl rounded-none'>
       <Image src='/images/facebook-logo2.png' alt='Google Logo' width={30} height={30}/>
       <span className='bg-blue-500 w-full rounded-none p-4  text-white px-4 scroll-py-3'>
        Entrar com Facebook
       </span>
    </button>
    )
   
  
}

export default SignInFacebookBtn