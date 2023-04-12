import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

type PaginationInfo = {
  currentPage: number;
  totalPages: number;
};

export default function PaginationInfo({
  currentPage,
  totalPages,
}: PaginationInfo) {
  return (
    <p className='bg-[#EEF3FF] px-2 text-[#0053E1]'>
      {currentPage + '/' + totalPages}
    </p>
  );
}
