import '@/styles/globals.css'

import { NextComponentType } from 'next'
import { SessionProvider, useSession } from 'next-auth/react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

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
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
export const theme = extendTheme({ colors })



export default function App({ Component, pageProps:{session, ...pageProps} }: CustomAppProps) {
  return (
    <>
    <ChakraProvider theme={theme}>
    <SessionProvider session={session}>
    
    
      {Component.auth ? (
        <Auth adminOnly={Component.auth.adminOnly}>
          <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <Component {...pageProps} />
          </div>
        </Auth>
      ):(
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
          <Component {...pageProps} />
        </div>
      )}
     
        
    
    </SessionProvider>
    </ChakraProvider>
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