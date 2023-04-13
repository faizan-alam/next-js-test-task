import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';
import { images } from '@/theme';
import NextImage from '@/components/NextImage';
import PaginationInfo from '@/components/PaginationInfo/PaginationInfo';
import GuidanceImage from '@/components/onboarding-guidanceImage/GuidanceImage';

export default function NewScrape() {
  return (
    <div>
      <GuidanceImage src={images.newScrape} />
      <div className='flex justify-between'>
        <h4>Create a new scrape</h4>
        <PaginationInfo currentPage={2} totalPages={4} />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur. Ut sit vel fames egestas
        integer. Purus ipsum amet scelerisque commodo dui ut.
      </p>
      <br />
    </div>
  );
}
