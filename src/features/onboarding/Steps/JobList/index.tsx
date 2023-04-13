import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';
import { images } from '@/theme';
import NextImage from '@/components/NextImage';
import PaginationInfo from '@/components/PaginationInfo/PaginationInfo';
import GuidanceImage from '@/components/onboarding-guidanceImage/GuidanceImage';

export default function JobList() {
  return (
    <div>
      <GuidanceImage src={images.newJob} />
      <div className='flex justify-between'>
        <h4>Get a list of jobs</h4>
        <PaginationInfo currentPage={4} totalPages={4} />
      </div>
      <p>With your scrape added, now the fun begins!</p>
      <br />
      <p>
        Either check the jobs dashboard or just sit back and wait for you to be
        notified in your chosen platforms!
      </p>
      <br />
    </div>
  );
}
