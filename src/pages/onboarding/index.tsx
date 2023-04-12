import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';
import Stepper from '@/features/onboarding/Stepper';
import CustomizePrompt from '@/pages/onboarding/Steps/CustomizePromts';
import NewScrape from '@/pages/onboarding/Steps/newScrape';
import ScrapeData from '@/pages/onboarding/Steps/scrapeData';
import JobList from '@/pages/onboarding/Steps/JobList';

const forms = [<CustomizePrompt />, <NewScrape />, <ScrapeData />, <JobList />];

export default function Onboarding() {
  return (
    <Layout>
      <Seo templateTitle='Onboarding' />
      <div className='bg-dark flex h-screen items-center justify-center'>
        <div className='w-1/3'>
          <Stepper forms={forms} />
        </div>
      </div>
    </Layout>
  );
}
