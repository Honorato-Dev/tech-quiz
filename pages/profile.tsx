import Layout from '@/components/Layout';
import { getError } from '@/utils/error';
import axios from 'axios';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const ProfileScreen = () => {
  const { data: session }: any = useSession();
  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  useEffect(() => {
    setValue('name', session.user.name ?? '');
    setValue('email', session.user.email ?? '');
  }, [session.user, setValue]);

  const submitHandler = async ({ name, email, password }: FormValues) => {
    try {
      await axios.put('/api/auth/update', {
        name,
        email,
        password,
      });
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      toast.success('Successful updated profile!');
      if (result?.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <Layout title="Update Profile">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-2xl font-semibold">Update Profile</h1>
        <div className="bg-white p-3 rounded-md bg-opacity-80">
          <div className="mb-4">
            <label className="font-semibold" htmlFor="name">
              Nome
            </label>
            <input
              type="text"
              className="w-full"
              id="name"
              autoFocus
              {...register('name', { required: 'Please enter name' })}
            />
            {errors.name && (
              <div className="text-red-500">{errors.name.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label className="font-semibold" htmlFor="name">
              Email
            </label>
            <input
              type="email"
              className="w-full"
              id="email"
              autoFocus
              {...register('email', {
                required: 'Please enter email',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: 'Please enter valid email format',
                },
              })}
            />
            {errors.email && (
              <div className="text-red">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label className="font-semibold" htmlFor="password">
              Password
            </label>
            <input
              className="w-full"
              type="password"
              id="password"
              {...register('password', {
                minLength: {
                  value: 6,
                  message: 'Password is more than 5 chars',
                },
              })}
            />
            {errors.password && (
              <div className="text">{errors.password.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label className="font-semibold" htmlFor="password">
             Confirm password
            </label>
            <input
              className="w-full"
              type="password"
              id="confirmPassword"
              {...register('confirmPassword', {
                validate: (value) => value === getValues('password'),
                minLength: {
                  value: 6,
                  message: 'Confirm Password is more than 5 chars',
                },
              })}
            />
            {errors.confirmPassword &&
              errors.confirmPassword.type === 'validate' && (
                <div className="text-red">Password do not match</div>
              )}
          </div>
          <div className="mb-4">
            <button className="primary-button">Update Profile</button>
          </div>
        </div>
      </form>
    </Layout>
  );
};
ProfileScreen.auth = true;
export default ProfileScreen;
