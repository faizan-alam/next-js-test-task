import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';
import { images } from '@/theme';
import NextImage from '@/components/NextImage';
import PaginationInfo from '@/components/PaginationInfo/PaginationInfo';
import GuidanceImage from '@/components/onboarding-guidanceImage/GuidanceImage';

export default function scrapeData() {
  return (
    <div>
      <GuidanceImage src={images.scrapeData} />
      <div className='flex justify-between'>
        <h4>Enter scrape data </h4>
        <PaginationInfo currentPage={3} totalPages={4} />
      </div>
      <p>On this modal section, enter the details of your scrape</p>
      <br />
      <p>
        Here you can choose where you will like to be notified, the interval of
        your scrape and the Upwork RSS feed for your jobs
      </p>
      <br />
      <p>
        Don't worry, on the form we'll have a video showing you exactly how to
        get this information
      </p>
      <br />
    </div>
  );
}
