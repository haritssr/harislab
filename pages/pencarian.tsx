import LayoutGlobalNavigation from '@/components/LayoutGlobalNavigation';
import { useState } from 'react';

export default function Pencarian() {
  //   const [openInput, setOpenInput] = useState('');
  const [tutup, setTutup] = useState(false);
  return (
    <LayoutGlobalNavigation
      globalNavigationTitle='Pencarian'
      browserTitle='Pencarian'
      description='Pencarian'
    >
      <div className='mx-auto max-w-sm space-y-5 border p-2'>
        <section className='flex items-center justify-between space-x-3'>
          <input
            className='px-3 py-1 rounded-md bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-200 border duration-100 focus:border-blue-500 border-zinc-300 w-full placeholder-zinc-400 hover:border-zinc-700'
            type='search'
            placeholder='Cari bab, topik, konstanta, variabel...'
            onFocus={() => setTutup(true)}
            // onChange={e => setOpenInput(e.target.value)}
          />
          {/* (openInput.length > 0 ||  */}
          {tutup && (
            <div
              onClick={() => setTutup(false)}
              className='text-blue-500 hover:text-blue-600 cursor-pointer pr-2'
            >
              Tutup
            </div>
          )}
        </section>
        <section>
          <div className='text-tiny text-zinc-400'>FILTER PENCARIAN</div>
          <div className='flex items-center space-x-2 mt-2'>
            <button className='border border-zinc-300 px-4 py-1 rounded-full bg-zinc-50 text-sm text-zinc-600 focus:bg-zinc-700 focus:text-white cursor-pointer hover:border-zinc-700'>
              Matematika
            </button>
            <button className='border border-zinc-300 px-4 py-1 rounded-full bg-zinc-50 text-sm text-zinc-600 focus:bg-zinc-700 focus:text-white cursor-pointer hover:border-zinc-700'>
              Fisika
            </button>
          </div>
        </section>
        <section>
          <div className='text-tiny text-zinc-400'>SUGESTI PENCARIAN</div>
          <div className='h-32 bg-zinc-200 rounded mb-3 flex items-center justify-center text-zinc-500'></div>
        </section>
        <section>
          <div className='text-tiny text-zinc-400'>HASIL PENCARIAN</div>
          <div className='h-32 bg-zinc-200 rounded mb-3 flex items-center justify-center text-zinc-500'></div>
        </section>
      </div>
    </LayoutGlobalNavigation>
  );
}
