//import Link from 'next/link';
import React, { useEffect } from 'react';
import {  Roboto_Mono } from 'next/font/google';
import { useForm } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { getError } from '@/utils/error';
import SignInGoogleBtn from '@/components/SignInGoogleBtn';

import SignInGithubBtn from '@/components/SignInGithubBtn';
import Link from 'next/link';


interface FormType {
  email: string;
  password: string;
}

const roboto = Roboto_Mono({
  weight: ['700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const LoginScreen = () => {
  const { data: session } = useSession();
  const router: any = useRouter();
  const { redirect }: any = router.query;
  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();
  const submitHandler = async ({ email, password }: FormType) => {
    try {
      const result: any = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Login">
      <div className='h-screen' >
      <div className={`mt-14 `&& roboto.className}>
        <form
          className="mx-auto max-w-screen-sm  bg-opacity-80 border border-zinc-800  rounded-sm p-6"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h1 className="mb-4 text-xl">Sign-in</h1>
          <div className='flex flex-col justify-center'>

<SignInGoogleBtn/>
{/* <SignInLinkedinBtn/> */}
{/* <SignInFacebookBtn/> */}
<SignInGithubBtn/>

</div>
          <div className="mb-4 mt-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="w-full"
              id="email"
              autoFocus
              {...register('email', {
                required: 'Please enter a valid email',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: 'Please use a valid email format',
                },
              })}
            />
            {errors.email && (
              <div className="text-red">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="w-full"
              id="password"
              autoFocus
              {...register('password', {
                required: 'Please enter a valid password',
                minLength: {
                  value: 5,
                  message: 'The password must have at least 5 characters ',
                },
              })}
            />
            {errors.password && (
              <div className="text-red">{errors.password.message}</div>
            )}
          </div>
          <div className="mb-4">
            <button className="login-button">Login</button>
          </div>
          <div className="mb-2">
            Have not you registered yet?&nbsp;
            <Link
              className="text-indigo-600  rounded-lg p-1 font-semibold"
              href="/register"
            >
              Register
            </Link>
          </div>
          <div className="mb-4 text-sm">
            Forgot password? &nbsp;
            <Link
              className="text-indigo-600  rounded-lg p-1 font-semibold"
              href="/forgot-password"
            >
              Click here
            </Link>
          </div>
        </form>
      </div>
      </div>
    </Layout>
  );
};

export default LoginScreen;
