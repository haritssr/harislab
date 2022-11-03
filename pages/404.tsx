import Layout from '@/components/Layout';
import Link from 'next/link';
import { InternalLink } from '@/components/DesignSystem';
import { ChevronLeftIcon } from '@heroicons/react/outline';

export default function HalamanTidakDitemukan() {
  return (
    <Layout browserTitle='404' description='Kayanya kamu nyasar deh ^_^'>
      <div className='flex flex-col items-center justify-center h-screen space-y-5 '>
        <div className='text-2xl sm:text-4xl font-semibold text-center text-zinc-700 sm:w-2/3'>
          Halaman Tidak Ditemukan
        </div>
        <Link href='/'>
          <a className=' pr-4 pl-2 py-2 text-base text-blue-600 duration-200 bg-white hover:bg-blue-50 border rounded-full cursor-pointer  flex items-center border-blue-500'>
            <ChevronLeftIcon className='text-blue-600 h-5 w-5' />
            <div className='font-medium'>Beranda</div>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
