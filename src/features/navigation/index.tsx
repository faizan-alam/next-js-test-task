import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';
import Login from '@/pages/loginScreen';

export default function Navigation() {
  const userLoggedIn = false;
  if (userLoggedIn)
    return (
      //AuthStack
      <Layout>
        <Seo templateTitle='Login' />
        {/* <Home/> */}
      </Layout>
    );
  return (
    //AppStackStack
    <Login />
  );
}
