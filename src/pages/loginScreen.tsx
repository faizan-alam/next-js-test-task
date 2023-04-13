import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import LoginCard from '@/features/loginScreen/loginCard';

export default function Login() {
  return (
    <Layout>
      <Seo templateTitle='Login' />
      {/* //convert blow divs in a background component */}
      <div className='bg-light flex h-screen items-center justify-center'>
        <div className='w-full max-w-md'>
          <LoginCard />
        </div>
      </div>
    </Layout>
  );
}
