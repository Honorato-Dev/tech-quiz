/* eslint-disable no-mixed-spaces-and-tabs */
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Menu } from '@headlessui/react';
import { ImMenu } from 'react-icons/im';
import Image from 'next/image';
import DropdownLink from './DropdownLink';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import CookiesConsent from './CookiesConsent';
import ThemeToogle from './ThemeToogle';



const Layout = ({ children, title }: any) => {
 
  const { status, data: session }: any = useSession();
  const logoutClickHandler = () => {
    signOut({ callbackUrl: '/login' });
  };

  return (
    <>
      <Head>
        <title>{title ? title + ' - Tech Quiz' : 'Tech Quiz'}</title>
        <meta name="description" content="news portal" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          {/* <CurrentDate/> */}
          <nav className="flex h-25  justify-between items-center px-4">
            <div className="text-3xl py-3 flex items-center">
              <Link href="/">
                <Image
                  src="/images/techquiz-logo.png"
                  alt="pmc logo"
                  width={50}
                  height={50}
                />
                
              </Link>
            </div>
            <ThemeToogle/>
            <div>
              {status === 'loading' ? (
                'loading'
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  
                  <Menu.Button className=" flex">
                    <p className="px-2 font-bold">Hello</p>
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right shadow-lg">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                  <DropdownLink className="dropdown-link" href="/getstarted">
                    Get Started
                  </DropdownLink>
                </Menu.Item>
                   
                    <Menu.Item>
                      <Link
                        className="dropdown-link"
                        href="/#"
                        onClick={logoutClickHandler}
                      >
                        Sign-out
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <>
                  <Link href="/login">
                    <p className="text-lg font-semibold">Sign-in</p>
                  </Link>
                </>
              )}
            </div>
          </nav>
          <div className="flex h-20 justify-end  px-4 font-bold text-white">
            <Menu as="div" className="relative inline-block lg:hidden absolute">
              <Menu.Button className="text-blue-600">
                <ImMenu />
              </Menu.Button>
              <Menu.Items className="absolute right-0 w-56 origin-top-right shadow-lg">
                <Menu.Item>
                  <DropdownLink className="dropdown-link" href="/">
                    Home
                  </DropdownLink>
                </Menu.Item>

                <Menu.Item>
                  <DropdownLink className="dropdown-link" href="/getstarted">
                    Get Started
                  </DropdownLink>
                </Menu.Item>
                
                <Menu.Item>
                  <DropdownLink className="dropdown-link" href="/contact">
                    Contact
                  </DropdownLink>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </header>
        <main className="container m-auto  mt-4 px-4">{children}</main>

         <CookiesConsent/>       
        <footer className=" ">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <Link
                  href="/"
                  className="flex items-center"
                >
                  <Image
                    src="/images/techquiz-logo.png"
                    alt="pmc logo"
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold  uppercase ">
                    Resources
                  </h2>
                  <ul className=" dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <Link
                        href="https://www.mongodb.com/"
                        className="hover:text-white"
                      >
                        MongoDB
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="https://next-auth.js.org/"
                        className="hover:text-white"
                      >
                        NextAuth
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://tailwindcss.com/"
                        className="hover:text-white"
                      >
                        Tailwind CSS
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold  uppercase ">
                   Follow us
                  </h2>
                  <ul className=" dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <Link
                        href="https://github.com/Honorato-Dev"
                        className="hover:text-white "
                      >
                        Github
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="https://discord.gg/TJu3XjEw"
                        className="hover:text-white"
                      >
                        Discord
                      </Link>
                    </li>
                     <li>
                      <Link
                        href="https://www.linkedin.com/company/101332373/admin/feed/posts/?feedType=following"
                        className="hover:text-white"
                      >
                        Linkedin
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold  uppercase ">
                    Legal
                  </h2>
                  <ul className=" dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <Link href="/privacy-policy" className="hover:text-white">
                       Privacy Policy
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/terms-and-conditions" className="hover:text-white">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:text-white">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm  sm:text-center dark:">
                © 2023 - 2024{' '}
                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                  Tech Quiz™
                </a>
                . All rights reserved.
              </span>
              <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                <Link
                  href="https://www.linkedin.com/in/jvmh/"
                  className=" hover:text-gray-900 dark:hover:text-gray-700"
                >
                  <FaLinkedin />
                  <span className="sr-only">Linkedin page</span>
                </Link>
                <Link
                  href="https://discord.gg/TJu3XjEw"
                  className=" hover:text-gray-900 dark:hover:text-gray-700"
                >
                  <FaDiscord />
                  <span className="sr-only">Discord community</span>
                </Link>
                <Link
                  href="#"
                  className=" hover:text-gray-900 dark:hover:text-gray-700"
                >
                  <FaInstagram />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://github.com/vituhonorato"
                  className=" hover:text-gray-900 dark:hover:text-gray-700"
                >
                  <FaGithub />
                  <span className="sr-only">GitHub account</span>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
