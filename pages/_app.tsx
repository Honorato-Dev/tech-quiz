import '@/styles/globals.css'

import { NextComponentType } from 'next'
import { SessionProvider, useSession } from 'next-auth/react'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import 'react-toastify/dist/ReactToastify.css';
type CustomAppProps = AppProps & {
  Component: NextComponentType & {auth?: {adminOnly:boolean}} // add auth type
  adminOnly:boolean
}

interface AuthProps{
  children:any;
  adminOnly: boolean
}




export default function App({ Component, pageProps:{session, ...pageProps} }: CustomAppProps) {
  return (
    <>
    <SessionProvider session={session}>
    
    
      {Component.auth ? (
        <Auth adminOnly={Component.auth.adminOnly}>
          <div className='bg-icem'>
            <Component {...pageProps} />
          </div>
        </Auth>
      ):(
        <div className='bg-icem'>
          <Component {...pageProps} />
        </div>
      )}
     
        
    
    </SessionProvider>
    </>
  )
}




//component to filter logged user and redirect unlogged user to page/unauthorized.tsx 
function Auth({ children, adminOnly }:AuthProps){
  const router = useRouter();
  const {status, data: session}:any = useSession({
    required: true,
    onUnauthenticated(){
      router.push('/unauthorized?message=login required');
    }
  });
  if(status === 'loading'){
    return <div>Loading...</div>
  }

  if (adminOnly && !session.user.isAdmin){
    router.push('/unauthorized?message=admin login required');
  }

  return children;
}