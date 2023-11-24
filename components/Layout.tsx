/* eslint-disable no-mixed-spaces-and-tabs */
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {Menu} from '@headlessui/react';
import {Bebas_Neue} from 'next/font/google'
import { ImMenu } from 'react-icons/im';
import Image from 'next/image';
import DropdownLink from './DropdownLink';
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const bebas = Bebas_Neue({
  subsets: ['latin'],
    weight: ['400'],
})

const Layout = ({children, title}:any) => {
  const { status, data: session }:any = useSession();
  const logoutClickHandler = () => {
   
    signOut({callbackUrl: '/login'})
}

  return (
    <>
        <Head>
        <title>{title ? title + ' - Tech Quiz':'Tech Quiz'}</title>
        <meta name="description" content="news portal" />
       
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position='bottom-center' limit={1} />
      <div className='flex min-h-screen flex-col justify-between'>
        <header>
        {/* <CurrentDate/> */}
           <nav className='flex h-25 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  justify-between items-center px-4'>
            
            <div  className='text-3xl py-3 flex items-center'>
             <Link href='/'>
             <Image src='/images/techquiz-logo.png' alt='pmc logo'  width={120} height={120}/>
                {/* <p className={bebas.className}>portal Barra do Jacuípe</p> */}
                
             </Link>
            </div>
            {/* <div><CurrentDate/></div> */}
            <div>
            
                
                {status === 'loading' ? ('loading'):
                
                session?.user ? (
                  <Menu as='div' className='relative inline-block'>
                    <Menu.Button className='text-blue-600 flex'>
                      <p className='px-2 font-bold'>Olá</p>{session.user.name}
                    </Menu.Button>
                    <Menu.Items className='absolute right-0 w-56 origin-top-right shadow-lg'>
                        <Menu.Item>
                          <DropdownLink className='dropdown-link' href='/profile'>
                              Perfil
                          </DropdownLink>
                        </Menu.Item>
                        {session.user.isAdmin && (
                            <Menu.Item>
                            <DropdownLink className='dropdown-link' href="/admin/dashboard">
                              Painel Admin
                            </DropdownLink>
                            </Menu.Item>
                            )}
                        <Menu.Item>
                                    
                                    <Link className='dropdown-link' href='/#'  onClick={logoutClickHandler}>
                                        Sair
                                    </Link>
                                    
                                
                            </Menu.Item>
                    </Menu.Items>
                  </Menu>
                  )
                :(
                  <Link href='/login'>
                        <p className='text-lg font-semibold'>Login</p>
                  </Link>
                )
                }
             
            </div>
          
           </nav>
          <div className='flex h-20 justify-between  items-center px-4'>
            <div className={bebas.className}>
           <ul className="hidden absolute  left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
              <li><Link className="nav-bar text-sm text-gray-400 hover:text-gray-500" href="/">Home</Link></li>
            
              <li><Link className="nav-bar text-sm text-gray-400 hover:text-gray-500" href="/javascript">Javascript</Link></li>
              
              <li><Link className="nav-bar text-sm text-gray-400 hover:text-gray-500" href="/node">Node</Link></li>
              
              <li><Link className="nav-bar text-sm text-gray-400 hover:text-gray-500" href="/java">Java</Link></li>
              
              <li><Link className="nav-bar text-sm text-gray-400 hover:text-gray-500" href="contact">Contato</Link></li>
		       </ul>
           </div>
           <Menu as='div' className='relative inline-block lg:hidden absolute'>
                    <Menu.Button className='text-blue-600'>
                     <ImMenu/>
                    </Menu.Button>
                    <Menu.Items className='absolute right-0 w-56 origin-top-right shadow-lg'>
                        <Menu.Item>
                          <DropdownLink className='dropdown-link' href='/'>
                          Home
                          </DropdownLink>
                        </Menu.Item>
                       
                        <Menu.Item>
                                    
                                    <Link className='dropdown-link' href='/javascript' >
                                        Javascript
                                    </Link>
                                    
                                
                            </Menu.Item>
                            <Menu.Item>
                                    
                                    <Link className='dropdown-link' href='/node' >
                                        Node
                                    </Link>
                                    
                                
                            </Menu.Item>
                             <Menu.Item>
                                    
                                    <Link className='dropdown-link' href='/java' >
                                        Java
                                    </Link>
                                    
                                
                            </Menu.Item>
                            <Menu.Item>
                                    
                                    <Link className='dropdown-link' href='/contact' >
                                        Contato
                                    </Link>
                                    
                                
                            </Menu.Item>
                    </Menu.Items>
                  </Menu>
         </div>
        </header>
        <main className='container m-auto  mt-4 px-4'>
            {children}
        </main>
        
<footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <Link href="https://flowbite.com/" className="flex items-center">
                   <Image src='/images/techquiz-logo.png' alt='pmc logo'  width={80} height={80} />
                  
              </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="https://flowbite.com/" className="hover:underline">Flowbite</Link>
                      </li>
                      <li>
                          <Link href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</Link>
                      </li>
                      <li>
                          <Link href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="#" className="hover:underline">Política de Privacidade</Link>
                      </li>
                      <li>
                          <Link href="#" className="hover:underline">Termos &amp; Condições</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Tech Quiz™</a>. Todos os Direitos Reservardos.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <Link href="https://www.facebook.com/barradojacuipenoticias" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-700">
              <FaFacebookF />
                  <span className="sr-only">Facebook page</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-700">
              <FaDiscord />
                  <span className="sr-only">Discord community</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-700">
              <FaInstagram />
                  <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://github.com/vituhonorato" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-700">
              <FaGithub />
                  <span className="sr-only">GitHub account</span>
              </Link>
             
          </div>
      </div>
    </div>
</footer>

    </div>
    </>
  )
}

export default Layout