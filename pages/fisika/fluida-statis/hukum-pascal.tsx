import Head from 'next/head';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import GlobalNavigation from '@/components/GlobalNavigation';
import GlobalNavigationMobile from '@/components/GlobalNavigationMobile';
import DaftarIsi from '@/components/daftarIsi';

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

      {router.asPath === '/kalkulator' && <Header title='Kalkulator' />}
      {router.asPath === '/matematika' && <Header title='Matematika' />}
      {router.asPath === '/fisika' && <Header title='Fisika' />}
      {router.asPath === '/bimbel' && <Header title='Bimbel' />}

      <main className='w-full max-w-5xl min-h-screen mx-auto sm:pb-0 font-inter '>
        <section className='bg-white/80 border-b border-zinc-300 py-2 backdrop-blur-md sticky top-0'>
          <div className='justify-between flex items-center pl-2 pr-3'>
            <article
              onClick={() => window.history.back()}
              className='flex items-center text-blue-600  w-1/3 cursor-pointer group duration-200'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 group-hover:text-blue-300'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
              </svg>
              <div className='-ml-1 text-tiny group-hover:text-blue-300'>Fisika</div>
            </article>

            <article className='w-1/3 text-center -space-y-0.5 items-center'>
              <div className='text-[11px] font-medium text-zinc-800'>Hukum Pascal</div>
              <div className='text-[9px] text-zinc-400'>Fluida Statis</div>
            </article>

            <div className='w-1/3 flex justify-end'>
              <DaftarIsi />
            </div>
          </div>
        </section>
        <div className='p-4'>
          <div className='font-semibold text-zinc-800 text-2xl'>Lorem ipsum dolor</div>
          <div className='text-tiny text-zinc-500 mb-5'>Lorem, ipsum dolor.</div>
          <p className='text-zinc-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laboriosam tempore
            deleniti minus velit distinctio error quia perspiciatis omnis voluptas! Sit impedit quos
            labore ut vel accusamus obcaecati, incidunt unde odit vitae dolorem fuga animi
            repudiandae? Voluptate sunt fugit possimus, itaque voluptatem veniam minus voluptatum
            corrupti deserunt alias, adipisci, enim quae consectetur. Ab necessitatibus natus
            numquam quisquam, deserunt quod voluptatum quae, facilis aut consectetur quis ipsam
            ipsum earum! Deserunt, ipsum sed vel recusandae quasi repellendus similique fugit
            reiciendis sit doloremque accusamus pariatur rem est quae amet nemo ut eaque molestiae
            minima. Ipsa ipsum laborum quos veritatis iure voluptate dicta magni!
          </p>
        </div>
      </main>

      <Footer />

      <GlobalNavigationMobile />
    </div>
  );
}
