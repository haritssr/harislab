import Layout from '@/components/Layout';
import Link from 'next/link';
import { InternalLink } from '@/components/DesignSystem';

export default function HalamanTidakDitemukan() {
  return (
    <Layout browserTitle='404' description='Kayanya kamu nyasar deh ^_^'>
      <div className='flex flex-col items-center justify-center h-screen space-y-5'>
        <div className='text-4xl font-bold text-center text-gray-700 sm:w-1/2'>Server error </div>
        <Link href='/'>
          <a className=' px-5 py-2 space-x-2 text-base text-white duration-200 bg-blue-600 border rounded-full cursor-pointer hover:bg-blue-700'>
            <div>Beranda</div>
          </a>
        </Link>
        <InternalLink name='Or see our site map' to='/sitemap' />
      </div>
    </Layout>
  );
}
