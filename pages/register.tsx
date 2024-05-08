import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signIn, useSession } from 'next-auth/react';
import * as Yup from 'yup';
import { getError } from '@/utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '@/components/Layout';
import { Roboto_Mono } from 'next/font/google';

interface LoginFormValues {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
}

const roboto = Roboto_Mono({
  weight: ['700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const validationSchema = Yup.object({
  name: Yup.string()
    .min(4, 'The username needs to have at least 4 characters')
    .required('The username is mandatory'),
  email: Yup.string()
    .email('Invalid email format')
    .required('The email is mandatory'),
  password: Yup.string()
    .min(6, 'The password needs to have at least 6 characters')
    .required('The password is mandatory'),
  confirmpassword: Yup.string()
    .min(6, 'Password confirmation needs to have at least 4 characters')
    .required('Password confirmation is mandatory')
    .oneOf([Yup.ref('password')], 'Password need to combine'),
});

const initialValues: LoginFormValues = {
  name: '',
  email: '',
  password: '',
  confirmpassword: '',
};

const RegisterScreen = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { redirect }: any = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const handleSubmit = async ({ name, email, password }: LoginFormValues) => {
    // Submit login data to the server

    try {
      await axios.post('/api/auth/signup', { name, email, password });

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
    <Layout title="registrar">
      <div className={`mx-auto max-w-screen-sm  bg-opacity-80 border border-zinc-800  rounded-sm p-6`&& roboto.className}> 
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mx-auto max-w-screen-sm  bg-opacity-80 border border-zinc-800  rounded-sm p-6">
        
          <h1 className="mb-4 text-3xl text-center font-semibold">New Account</h1>
          <div className=" p-3 rounded-md bg-opacity-80">
            <div className="mb-4">
              <label htmlFor="email" className="text-lg font-semibold">
               Username
              </label>
              <Field
                autoFocus
                className="w-full"
                type="name"
                id="name"
                name="name"
              />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="name" />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-lg font-semibold">
               Email
              </label>
              <Field
                autoFocus
                className="w-full"
                type="email"
                id="email"
                name="email"
              />
              <div className="text-red-500 text-xs ">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-lg font-semibold">
                Password
              </label>
              <Field
                autoFocus
                className="w-full"
                type="password"
                id="password"
                name="password"
              />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="password" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-lg font-semibold">
                Confirm Password
              </label>
              <Field
                autoFocus
                className="w-full"
                type="password"
                id="confirmpassword"
                name="confirmpassword"
              />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="confirmpassword" />
              </div>
            </div>
            <div className="mb-4">
              <button type="submit" className="primary-button">
               Register
              </button>
            </div>
          </div>
        </Form>
      </Formik>
      </div>
    </Layout>
  );
};
export default RegisterScreen;
