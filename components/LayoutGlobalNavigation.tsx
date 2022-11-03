import Head from 'next/head';
import GlobalNavigation from './GlobalNavigation';
import { useRouter } from 'next/router';
import Footer from './Footer';
import GlobalNavigationMobile from './GlobalNavigationMobile';
import { useEffect, useRef, useState } from 'react';
import { Listbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/outline';

import { CalculatorIcon, UserCircleIcon } from '@heroicons/react/outline';
import Tools, { ToolsLight } from './Tools';

interface LayoutType {
  children: React.ReactNode;
  browserTitle: string;
  description: string;
  globalNavigationTitle: string;
}

export default function LayoutGlobalNavigation({
  children,
  browserTitle,
  description,
  globalNavigationTitle,
}: LayoutType) {
  const router = useRouter();
  const image = 'https://harislab.com/public/HarisLab.png';
  const type = 'website';
  // bg-[#f2f1f7]

  return (
    <div className='bg-white'>
      <Head>
        {router.asPath === '/' ? (
          <title>Harits Syah</title>
        ) : (
          <title>{browserTitle} - Haris Lab</title>
        )}{' '}
        <link rel='icon' href='/logo_harislab.svg' />
        <meta name='theme-color' content='#27272a' />
        <meta name='robots' content='follow, index' />
        <meta name='description' content={description} />
        <meta property='og:type' content={type} />
        <meta property='og:site_name' content='HarisLab' />
        <meta property='og:description' content={description} />
        <meta property='og:title' content={browserTitle} />
        <meta property='og:image' content={image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@haritssr' />
        <meta name='twitter:title' content={browserTitle} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />
      </Head>

      <GlobalNavigation />
      {/*  top-[49px] */}
      <div className='sticky inset-x-0 top-0 z-50 mb-2.5 sm:mb-10 w-full border-b border-t border-gray-300 bg-gray-100/80 saturate-150 backdrop-blur py-1.5'>
        <section className='mx-auto flex max-w-5xl items-center justify-between px-3 lg:px-0'>
          <div className='text-xl font-semibold text-zinc-900'>{globalNavigationTitle}</div>
          <ToolsLight />
        </section>
      </div>
      {/* <div className='text-4xl font-bold text-zinc-800 max-w-4xl px-3 xl:px-0 mx-auto py-4'>{globalNavigationTitle}</div> */}

      <main className='mx-auto min-h-screen w-full max-w-5xl px-3 pb-5 sm:pb-0 xl:px-0'>
        {children}
      </main>

      <Footer />
      <GlobalNavigationMobile />
    </div>
  );
}

function Sort() {
  const people = [
    { id: 1, name: 'Domain' },
    { id: 2, name: 'Kelas' },
  ];
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <div className='flex justify-end items-center '>
      <Listbox value={selectedPerson} onChange={setSelectedPerson} as='div' className='relative'>
        <Listbox.Button className='text-blue-600 hover:text-blue-400 text-right w-[125px]'>
          Sort
        </Listbox.Button>
        <Listbox.Options className='absolute mt-1 w-full overflow-hidden  bg-white/10 backdrop-blur rounded-md shadow-xl divide-y divide-zinc-400 border'>
          {people.map(person => (
            <Listbox.Option
              key={person.id}
              value={person}
              className='px-2 py-1 flex items-center space-x-2 cursor-pointer hover:bg-zinc-50'
            >
              {({ selected }) => (
                <>
                  <CheckIcon className={`w-5 h-5 ${selected ? 'text-zinc-800' : 'text-white'}`} />
                  <div>{person.name}</div>
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
