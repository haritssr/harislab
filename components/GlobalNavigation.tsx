import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from './Icons';
import Search from './Search';
import { CalculatorIcon, UserCircleIcon } from '@heroicons/react/outline';

export default function GlobalNavigation() {
  const router = useRouter();
  return (
    <>
      <nav className='z-40 sticky top-0 bg-white shadow-sm border-b border-zinc-300 items-center flex '>
        <div className='flex items-center justify-between w-full max-w-5xl py-2 mx-auto px-3 sm:px-5 xl:px-0  '>
          <Link href='/'>
            <a className='w-1/2 sm:w-1/6  space-x-1.5 flex items-center'>
              <Logo />
              <div className='text-zinc-800 font-inter font-semibold -mb-[1.3px]'>Haris Lab</div>
            </a>
          </Link>
          <div className='hidden sm:block sm:w-4/6'>
            <div className='flex sm:space-x-2 items-center sm:justify-start xl:justify-center'>
              <NavDesktopLink href='/fisika' title='Materi' />
              <NavDesktopLink href='/analisis' title='Analisis' />
              <NavDesktopLink href='/latihan-soal' title='Latihan' />
              <NavDesktopLink href='/ujian' title='Ujian' />
              <NavDesktopLink href='/bimbel' title='Bimbel' />

            </div>
          </div>
          <div className='items-center flex space-x-2 sm:w-1/6 justify-end'>
            <Search />
            <div className='py-1.5 sm:py-1 px-1.5 sm:px-2 hover:bg-zinc-100  active:ring-1 active:ring-zinc-700 rounded-md group flex items-center hover:cursor-pointer  md:space-x-1 duration-100 ease-out'>
              <CalculatorIcon
                strokeWidth={1.8}
                className='h-5 w-5 md:h-4 md:w-4 text-zinc-800 group-hover:text-blue-800 sm:group-hover:text-black group-active:text-blue-600'
              />
              <div className='hidden md:block text-sm text-zinc-800 sm:group-hover:text-black group-active:text-blue-600'>
                Kalkulator
              </div>
            </div>

            <div className='py-1.5 sm:pb-[5px] sm:pt-[3px] px-1.5 sm:px-3  rounded-md group flex items-center hover:cursor-pointer duration-100 ease-out sm:border bg-blue-50 sm:border-blue-500 active:ring-1 active:ring-blue-400'>
              <UserCircleIcon
                strokeWidth={1.8}
                className='h-5 w-5 md:h-4 md:w-4 text-zinc-800 sm:group-hover:text-black group-active:text-blue-600 sm:hidden'
              />
              <div className='hidden md:block text-sm text-blue-600 hover:text-blue-700'>Masuk</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

const NavDesktopLink = ({ href, title }: { href: string; title: string }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={`${
          // router.asPath.substring(0, href.length) === /experiments or /blog ,etc
          router.asPath.substring(0, href.length) === href ? 'text-black' : 'text-zinc-700'
        } py-0.5 px-2.5 hover:bg-zinc-100 rounded-md border border-white hover:border-zinc-100`}
      >
        {title}
      </a>
    </Link>
  );
};
