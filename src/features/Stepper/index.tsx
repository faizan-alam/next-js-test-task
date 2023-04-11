import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function Stepper({ forms }: any) {
  const [currentStep, setCurrentStep] = React.useState(0);

  const handleNext = () => {
    if (currentStep < forms.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSkip = () => {
    if (currentStep < forms.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div
      className='rounded rounded-xl bg-white px-8 pb-8 pt-6 shadow-lg'
      style={{
        boxShadow:
          '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 8px 24px rgba(16, 24, 40, 0.1)',
        borderRadius: '16px',
      }}
    >
      <div>
        <div>{forms[currentStep]}</div>
        <div className='mt-4 flex justify-between'>
          <button
            className='shadow-outline w-full rounded rounded-lg border border-gray-300 bg-white py-2 text-black shadow-sm'
            onClick={handlePrev}
            disabled={currentStep === 0}
          >
            Skip
          </button>
          <div className='p-4' />
          <button
            className='focus:shadow-outline w-full rounded-lg bg-blue-600 from-blue-600 to-blue-800 py-2 font-bold text-white hover:bg-gradient-to-br focus:outline-none'
            onClick={handleNext}
            disabled={currentStep === forms.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
