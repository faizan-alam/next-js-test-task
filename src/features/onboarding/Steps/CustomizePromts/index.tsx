import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';
import PaginationInfo from '@/components/PaginationInfo/PaginationInfo';

export default function CustomizePrompt() {
  const [experienceInput, setexperienceInput] = React.useState('');
  const [signOffInput, setsignOffInput] = React.useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    //throw new Error('Function not implemented.');
  }

  function handlesignOffInputChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    setsignOffInput(event.target.value);
  }

  function handleexperienceInputChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    setexperienceInput(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            className='mb-2 block font-bold text-gray-700'
            htmlFor='experienceInput'
          >
            Expertise and Experience:
          </label>
          <textarea
            className='focus:shadow-outline w-full appearance-none overflow-y-hidden rounded border px-3 py-2 leading-tight text-gray-700 placeholder-[#ACB1BC] shadow focus:outline-none'
            id='experienceInput'
            rows={5}
            placeholder={
              'I have 5 years experience working at a fortune 500 company where we helped 1000th companies scale to X.' +
              '\n' +
              '\n' +
              'I have strong copywriting skills via ....'
            }
            value={experienceInput}
            onChange={handleexperienceInputChange}
            required
          />
        </div>
        <div className='mb-6'>
          <label
            className='mb-2 block font-bold text-gray-700'
            htmlFor='signOffInput'
          >
            How would you like to sign off the proposal
          </label>
          <textarea
            className='focus:shadow-outline w-full appearance-none overflow-y-hidden rounded border px-3 py-2 leading-tight text-gray-700 placeholder-[#ACB1BC] shadow focus:outline-none'
            id='signOffInput'
            rows={5}
            placeholder={
              'I look forward to hearing a prompt response from yourself as I prepare to engage with your organisation' +
              '\n' +
              '\n' +
              'Best' +
              '\n'
              // '\n' +
              // 'Andrew'
            }
            value={signOffInput}
            onChange={handlesignOffInputChange}
            required
          />
        </div>
      </form>
      <br />
      <div className='mb-4 flex justify-between'>
        <h4>Help Us Customize your Prompts</h4>
        <PaginationInfo currentPage={1} totalPages={4} />
      </div>
      <p>
        Please fill in this form to the best of your detail so we can customize
        your AI generated proposals as much as possible.
      </p>
      <br />
      <p>
        You can change these at any time by heading over to the settings tab
        within the app!
      </p>
      <br />
    </div>
  );
}
