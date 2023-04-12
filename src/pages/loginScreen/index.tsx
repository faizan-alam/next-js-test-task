import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';
import { images } from '@/theme';
import NextImage from '@/components/NextImage';
import LoginCard from '@/features/loginScreen/loginCard';

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
  };

  const handleGoogleLogin = () => {
    // TODO: handle Google login logic
  };
  return (
    <Layout>
      <Seo templateTitle='Login' />
      {/* //convert blow divs in a background component */}
      <div className='bg-light flex h-screen items-center justify-center'>
        <div className='w-full max-w-md'>
          <LoginCard
            handleSubmit={handleSubmit}
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
            handleGoogleLogin={handleGoogleLogin}
            email={email}
            password={password}
          />
        </div>
      </div>
    </Layout>
  );
}
