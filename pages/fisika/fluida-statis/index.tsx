import Head from 'next/head';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import GlobalNavigation from '@/components/GlobalNavigation';
import GlobalNavigationMobile from '@/components/GlobalNavigationMobile';
import Link from 'next/link';

import { DataFisika } from './../../../data/DataFisika';
import { Disclosure } from '@headlessui/react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsCircleHorizontalIcon,
  FolderIcon,
} from '@heroicons/react/outline';

interface LayoutType {
  children: React.ReactNode;
  browserTitle: string;
  description: string;
}

export default function Layout({ children, browserTitle, description }: LayoutType) {
  const router = useRouter();
  const image = 'https://harislab.com/public/HarisLab.png';
  const type = 'website';
  // bg-[#f2f1f7]
  return (
    <div className='bg-white'>
      <Head>
        <title>Haris Lab</title>
        <link rel='icon' href='/logo_harislab.svg' />
        <meta name='theme-color' content='#27272a' />
        <meta name='robots' content='follow, index' />
        <meta content={description} name='description' />

        <meta property='og:type' content={type} />
        <meta property='og:site_name' content='Haris Lab' />
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

      <nav className='w-full sticky h-11 top-[45px] border-b border-zinc-300 bg-[#FBFBFD]/80 backdrop-blur-md saturate-150'>
        <nav className='max-w-4xl mx-auto h-11 px-3 xl:px-0 flex items-center justify-between w-full '>
          {/* BACK BUTTON */}
          <section className='flex items-center text-blue-600 hover:text-blue-400 w-1/3 -ml-2'>
            <ChevronLeftIcon className='h-6 w-6 -mr-1 ' />
            <div onClick={() => history.back()} className='cursor-pointer -mt-[1px]'>
              Fisika
            </div>
          </section>

          {/* TITLE */}
          <section className='w-1/3 text-center -mr-2 font-medium text-zinc-800 pl-2'>
            Fluida Statis
          </section>

          {/* CONTROLS */}
          <section className='w-1/3 flex items-center justify-end space-x-1 sm:space-x-2'>
            <DotsCircleHorizontalIcon
              strokeWidth={1.5}
              className='h-6 w-6 text-blue-600 hover:text-blue-400 '
            />
          </section>
        </nav>
      </nav>

      <div className='text-4xl font-bold text-zinc-800 max-w-4xl px-3 xl:px-0 mx-auto py-2 sm:py-4'>
        Fluida Statis
      </div>

      {router.asPath === '/kalkulator' && <Header title='Kalkulator' />}
      {router.asPath === '/matematika' && <Header title='Matematika' />}
      {router.asPath === '/fisika' && <Header title='Fisika' />}
      {router.asPath === '/bimbel' && <Header title='Bimbel' />}

      <div className='bg-white max-w-4xl mx-auto mb-5 grid grid-cols-1 sm:grid-cols-4'>
        <main className='w-full max-w-5xl min-h-screen px-3 mx-auto xl:px-0 sm:pb-0 font-inter  gap-10 sm:col-span-3'>
          <div className='text-zinc-500 text-[11px] sm:text-tiny tracking-tight mb-8'>
            4 Topic · 20 Contoh Soal · 30 Latihan Soal{' '}
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
            {/* BACA MATERI */}
            <article className=''>
              <div className=' text-gray-800 text-lg font-bold'>Baca Materi</div>
              <div className='divide-y divide-gray-700/20 rounded-lg h-fit overflow-hidden bg-[#F0EFF6] mt-1'>
                {[
                  { title: 'Tekanan' },
                  { title: 'Hukum Pascal' },
                  { title: 'Hukum Archimedes' },
                ].map(({ title }) => (
                  <Link key={title} href={`/fisika/${title.toLowerCase().replace(' ', '-')}`}>
                    <div className='flex items-center justify-between pr-2 sm:py-2 py-[9px]    cursor-pointer hover:bg-zinc-400/20 pl-3'>
                      <div className='items-center flex overflow-hidden'>
                        {/* <Folder /> */}
                        <FolderIcon
                          strokeWidth={1.5}
                          className='h-[26px] w-[26px] text-blue-500 mr-2 fill-blue-200'
                        />
                        <div className='text-zinc-800 text-[17px] truncate font-medium '>
                          {title}
                        </div>
                      </div>
                      <ChevronRightIcon className='h-5 w-5  duration-200 text-gray-500' />
                    </div>
                  </Link>
                ))}
              </div>
            </article>

            {/* SOAL */}
            <article className=''>
              <div className=' text-gray-800 text-lg font-bold'>Soal</div>
              <div className='divide-y divide-gray-700/20 rounded-lg h-fit overflow-hidden bg-[#F0EFF6] mt-1'>
                {[{ title: 'Contoh Soal' }, { title: 'Latihan Soal' }].map(({ title }) => (
                  <Link key={title} href={`/fisika/${title.toLowerCase().replace(' ', '-')}`}>
                    <div className='flex items-center justify-between pr-2 sm:py-2 py-[9px]    cursor-pointer hover:bg-zinc-400/20 pl-3'>
                      <div className='items-center flex overflow-hidden'>
                        {/* <Folder /> */}
                        <FolderIcon
                          strokeWidth={1.5}
                          className='h-[26px] w-[26px] text-blue-500 mr-2 fill-blue-200'
                        />
                        <div className='text-zinc-800 text-[17px] truncate font-medium '>
                          {title}
                        </div>
                      </div>
                      <ChevronRightIcon className='h-5 w-5  duration-200 text-gray-500' />
                    </div>
                  </Link>
                ))}
              </div>
            </article>

            <article className='sm:col-span-2'>
              <div className=' text-gray-800 text-lg font-bold'>Konstanta</div>
              <div className='space-y-1 divide-y divide-gray-300/70  pl-1.5 pb-1.5 pt-0.5 rounded-xl bg-[#F0EFF6] mt-1 h-96'></div>
            </article>
          </div>
        </main>

        <div className='sm:col-span-1 ml-20 -mt-[50px]'>
          <div className='mb-5 text-zinc-800 font-medium'>Peta Fluida Statis</div>
          {['Baca Materi', 'Soal', 'Konstanta', 'Variabel', 'Rumus'].map(isi => (
            <div
              key={isi}
              className='pl-2 border-l border-zinc-300 hover:border-black text-zinc-600 hover:text-black text-left cursor-pointer text-tiny py-1'
            >
              {isi}
            </div>
          ))}
        </div>
      </div>

      <Footer />

      <GlobalNavigationMobile />
    </div>
  );
}

const PetaFisika = () => {
  return (
    <div className='grid grid-cols-1 space-y-5'>
      {DataFisika.map(({ domain, chapters }) => (
        <div key={domain}>
          <div className='font-bold text-zinc-700 text-[12px]'>{domain.toUpperCase()}</div>
          {chapters.map(({ title, contents }) => (
            <Disclosure key={title} as='div' className=''>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`text-left text-[12px] -py-0.5 w-full hover:text-red-600 text-zinc-600 truncate  ${
                      open && 'text-red-600'
                    }`}
                  >
                    {title.toUpperCase()}
                  </Disclosure.Button>
                  <div className={`${open && 'mb-2 '}`}>
                    {contents.map(chapter => (
                      <Disclosure.Panel
                        key={chapter}
                        className='pl-2 border-l-[1.5px] border-zinc-200 hover:border-black text-[12px] text-zinc-500 hover:text-black text-left cursor-pointer '
                      >
                        {chapter}
                      </Disclosure.Panel>
                    ))}
                  </div>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      ))}
    </div>
  );
};
