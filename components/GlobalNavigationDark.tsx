import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from './Icons';
import Tools from './Tools';

export default function GlobalNavigationDark() {
  const router = useRouter();
  const stickyAtHome = router.asPath == '/' ? 'sticky top-0' : '';
  return (
    <>
      <nav className={`z-40 ${stickyAtHome} bg-zinc-800 items-center flex`}>
        <div className='flex items-center justify-between w-full max-w-5xl py-2 mx-auto px-3 sm:px-5 xl:px-0  '>
          <Link href='/'>
            <a className='w-1/2 sm:w-1/6  space-x-1.5 flex items-center'>
              <Logo />
              <div className='text-zinc-200 font-inter font-semibold -mb-[1.3px]'>Haris Lab</div>
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
          <Tools />
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
          router.asPath.substring(0, href.length) === href ? 'text-white' : 'text-zinc-400'
        } py-[1.5px] px-2.5 hover:text-white`}
      >
        {title}
      </a>
    </Link>
  );
};
