import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';
import { images } from '@/theme';
import NextImage from '@/components/NextImage';

export default function NewScrape() {
  return (
    <div>
      <NextImage
        useSkeleton
        className='mr-2'
        src={images.newScrape}
        width='500'
        height='500'
        alt='Icon'
      />
      <div className='flex justify-between'>
        <h4>Create a new scrape</h4>
        <p className='bg-[#EEF3FF] p-2 text-[#0053E1]'>2/4</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur. Ut sit vel fames egestas
        integer. Purus ipsum amet scelerisque commodo dui ut.
      </p>
      <br />
    </div>
  );
}
