import * as React from 'react';

import NextImage from '@/components/NextImage';
import { images } from '@/theme';

type LoginCardType = {
  handleSubmit: (event: { preventDefault: () => void }) => void;
  handleEmailChange: (event: {
    target: { value: React.SetStateAction<string> };
  }) => void;
  handlePasswordChange: (event: {
    target: { value: React.SetStateAction<string> };
  }) => void;
  handleGoogleLogin: () => void;
  email: string;
  password: string;
};

export default function LoginCard({
  handleSubmit,
  handleEmailChange,
  handlePasswordChange,
  handleGoogleLogin,
  email,
  password,
}: LoginCardType) {
  return (
    <div
      className='rounded rounded-xl bg-white px-8 pb-8 pt-6 shadow-lg'
      style={{
        boxShadow:
          '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 8px 24px rgba(16, 24, 40, 0.1)',
        borderRadius: '16px',
      }}
    >
      <p
        className='mb-4'
        style={{
          //fontFamily: "'Inter Tight'",
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '30px',
          lineHeight: '38px',
          textAlign: 'center',
        }}
      >
        Login
      </p>
      <p className='font-inter-tight mb-4 text-center text-base font-normal leading-6 text-gray-500'>
        Welcome back! Please enter your details.
      </p>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            className='lg:text-gray-800" font-sans text-base font-medium font-normal leading-5 text-gray-700 lg:text-sm lg:font-normal'
            htmlFor='email'
          >
            Email:
          </label>
          <input
            className='focus:shadow-outline w-full appearance-none rounded-md border border-gray-300 px-3 py-2 leading-tight text-gray-700 placeholder-[#ACB1BC] shadow-sm focus:outline-none'
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
            className='font-sans text-base font-medium font-normal leading-5 text-gray-700 lg:text-sm lg:font-normal lg:text-gray-800'
            htmlFor='password'
          >
            Password:
          </label>
          <div className='relative'>
            <input
              className='focus:shadow-outline w-full appearance-none rounded-md border border-gray-300 px-3 py-2 leading-tight text-gray-700 placeholder-[#ACB1BC] shadow-sm focus:outline-none'
              id='password'
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <a
              href='#'
              className='font-inter-tight absolute inset-y-0 right-0 flex items-center pr-3 text-base font-medium leading-5 text-blue-600 text-blue-600 hover:text-blue-800 lg:text-sm'
            >
              Forgot Password?
            </a>
          </div>
        </div>
        <button
          className='focus:shadow-outline mb-4 rounded-md bg-gradient-to-br from-blue-600 to-blue-800 px-4 py-2 font-bold text-white focus:outline-none'
          type='submit'
          style={{
            width: '100%',
            backgroundColor:
              'linear-gradient(180deg, #2D66F8 0%, #2A5EE6 52.08%, #2554CC 100%)',
          }}
        >
          Login
        </button>

        <button
          className='flex items-center justify-center gap-0 rounded-md border border-gray-400 bg-white px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-100'
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
          <span>Sign in with Google</span>
        </button>
      </form>
    </div>
  );
}
