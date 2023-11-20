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
           <nav className='flex h-25 bg-white  justify-between items-center px-4'>
            
            <div  className='text-3xl py-3 flex items-center'>
             <Link href='/'>
             <Image src='/images/logo.png' alt='pmc logo'  width={120} height={120}/>
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
          <div className='flex h-20 justify-between shadow-md items-center px-4'>
            <div className={bebas.className}>
           <ul className="hidden absolute  left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
              <li><Link className="nav-bar text-sm text-gray-400 hover:text-gray-500" href="/">Home</Link></li>
            
              <li><Link className="nav-bar text-sm text-gray-400 hover:text-gray-500" href="/services">Serviços</Link></li>
              
              <li><Link className="nav-bar text-sm text-gray-400 hover:text-gray-500" href="/vacancies">Vagas</Link></li>
              
              <li><Link className="nav-bar text-sm text-gray-400 hover:text-gray-500" href="/products">Vendas</Link></li>
              
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
                                    
                                    <Link className='dropdown-link' href='/services' >
                                        Serviços
                                    </Link>
                                    
                                
                            </Menu.Item>
                            <Menu.Item>
                                    
                                    <Link className='dropdown-link' href='/vacancies' >
                                        Vagas
                                    </Link>
                                    
                                
                            </Menu.Item>
                             <Menu.Item>
                                    
                                    <Link className='dropdown-link' href='/products' >
                                        Vendas
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
        
<footer className="bg-white ">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <Link href="https://flowbite.com/" className="flex items-center">
                   <Image src='/images/logo.png' alt='pmc logo'  width={80} height={80} />
                  
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
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-700">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span className="sr-only">Discord community</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-700">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </Link>
              <Link href="https://github.com/vituhonorato" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-700">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
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