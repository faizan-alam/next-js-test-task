import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';
import { images } from '@/theme';
import NextImage from '@/components/NextImage';

export default function JobList() {
  return (
    <div>
      <NextImage
        useSkeleton
        className='mr-2'
        src={images.newJob}
        width='500'
        height='500'
        alt='Icon'
      />
      <div className='flex justify-between'>
        <h4>Get a list of jobs</h4>
        <p className='bg-[#EEF3FF] p-2 text-[#0053E1]'>4/4</p>
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
