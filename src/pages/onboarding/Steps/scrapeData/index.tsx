import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';
import { images } from '@/theme';
import NextImage from '@/components/NextImage';

export default function scrapeData() {
  return (
    <div>
      <NextImage
        useSkeleton
        className='mr-2 justify-center'
        src={images.scrapeData}
        width='300'
        height='300'
        alt='Icon'
        style={{ display: 'block', marginLeft: '120px' }}
      />
      <div className='flex justify-between'>
        <h4>Create a new scrape</h4>
        <p className='bg-[#EEF3FF] p-2 text-[#0053E1]'>3/4</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur. Ut sit vel fames egestas
        integer. Purus ipsum amet scelerisque commodo dui ut.
      </p>
    </div>
  );
}
