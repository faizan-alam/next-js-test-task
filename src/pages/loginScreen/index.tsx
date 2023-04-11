import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';
import { images } from '@/theme';
import NextImage from '@/components/NextImage';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // TODO: handle login logic
  };

  const handleGoogleLogin = () => {
    // TODO: handle Google login logic
  };
  return (
    <Layout>
      <Seo templateTitle='Login' />
      <div className='bg-dark flex h-screen items-center justify-center'>
        <div className='w-full max-w-md'>
          <div
            className='rounded rounded-xl bg-white px-8 pb-8 pt-6 shadow-lg'
            style={{
              boxShadow:
                '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 8px 24px rgba(16, 24, 40, 0.1)',
              borderRadius: '16px',
            }}
          >
            <h1 className='mb-4 text-center text-2xl font-bold'>Login</h1>
            <p className='mb-4 text-center'>
              Welcome back! Please enter your details.
            </p>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  className='mb-2 block font-bold text-gray-700'
                  htmlFor='email'
                >
                  Email:
                </label>
                <input
                  className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                  id='email'
                  type='email'
                  placeholder='Enter your email'
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className='mb-6'>
                <label
                  className='mb-2 block font-bold text-gray-700'
                  htmlFor='password'
                >
                  Password:
                </label>
                <input
                  className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                  id='password'
                  type='password'
                  placeholder='Enter your password'
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button //bg-gradient-to-br from-blue-600 to-blue-800
                className='focus:shadow-outline mb-4 rounded bg-blue-600 from-blue-600 to-blue-800 px-4 py-2 font-bold text-white hover:bg-gradient-to-br focus:outline-none '
                type='submit'
                style={{
                  width: '100%',
                  backgroundColor:
                    'linear-gradient(180deg, #2D66F8 0%, #2A5EE6 52.08%, #2554CC 100%)',
                }}
              >
                Login
              </button>
              {/* <button //GoogleIcon.png
                className='rounded border border-gray-400 bg-white px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-100'
                onClick={handleGoogleLogin}
                style={{ width: '100%' }}
              >
                Continue with Google
              </button> */}
              <button
                className='flex items-center justify-center gap-0 rounded border border-gray-400 bg-white px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-100'
                onClick={handleGoogleLogin}
                style={{ width: '100%' }}
              >
                <NextImage
                  useSkeleton
                  className='mr-2'
                  src={images.googleLogo}
                  width='20'
                  height='20'
                  alt='Icon'
                />
                <span>Continue with Google</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
