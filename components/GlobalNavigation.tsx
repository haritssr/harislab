import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from './Icons';
import Pencarian from './GlobalTools/Pencarian';
import Kalkulator from './GlobalTools/Kalkulator';
import Statistik from './GlobalTools/Statistik';
import Profil from './GlobalTools/Profil';

export default function GlobalNavigation() {
  return (
    <>
      <nav className='z-40 sticky top-0 bg-white border-b border-zinc-300 items-center flex '>
        <div className='flex items-center justify-between w-full max-w-5xl py-2 mx-auto px-3 sm:px-5 xl:px-0  '>
          <Link href='/' className='w-1/2 sm:w-1/6  space-x-1.5 flex items-center'>
            <Logo />
            <div className='text-zinc-800 font-inter font-semibold -mb-[1.3px]'>Haris Lab</div>
          </Link>
          <div className='hidden sm:block sm:w-4/6'>
            <div className='flex sm:space-x-2 items-center sm:justify-start xl:justify-center'>
              <NavDesktopLink href='/fisika' title='Referensi' />
              <NavDesktopLink href='/analisis' title='Analisis' />
              <NavDesktopLink href='/latihan-soal' title='Latihan' />
              <NavDesktopLink href='/bimbel' title='Bimbel' />
            </div>
          </div>
          <div className='items-center flex space-x-2 sm:w-1/6 justify-end'>
            <Pencarian />
            <Kalkulator />
            <Statistik />
            <Profil />
          </div>
        </div>
      </nav>
    </>
  );
}

const NavDesktopLink = ({ href, title }: { href: string; title: string }) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${
        // router.asPath.substring(0, href.length) === /experiments or /blog ,etc
        router.asPath.substring(0, href.length) === href ? 'text-black' : 'text-zinc-700'
      } py-0.5 px-2.5 hover:bg-zinc-100 rounded-md border border-white hover:border-zinc-100`}
    >
      {title}
    </Link>
  );
};
