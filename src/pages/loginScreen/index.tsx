import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import LoginCard from '@/features/loginScreen/loginCard';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // TODO: handle login logic
  };

  function handleGoogleLogin(): void {
    // throw new Error('Function not implemented.');
  }

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
