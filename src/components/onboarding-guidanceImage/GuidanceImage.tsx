import * as React from 'react';

import NextImage from '@/components/NextImage';
import { images } from '@/theme';

type GuidanceImageType = {
  src: string;
};

export default function GuidanceImage({ src }: GuidanceImageType) {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <NextImage useSkeleton src={src} alt='Icon' layout='responsive' />
    </div>
  );
}
