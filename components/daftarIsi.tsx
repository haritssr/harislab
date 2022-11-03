import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

const links = [
  { id: 1, nameAndLink: 'Konstanta' },
  { id: 2, nameAndLink: 'Variabel' },
  { id: 3, nameAndLink: 'Rumus' },
  { id: 4, nameAndLink: 'Penurunan rumus' },
];

export default function DaftarIsi() {
  return (
    <Menu as='div' className='relative items-center flex'>
      {({ open }) => (
        <>
          <Menu.Button className=''>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={`h-6 w-6 ${open ? 'text-blue-300' : 'text-blue-600 hover:text-blue-400'}`}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={1.5}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
              />
            </svg>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute right-0 mt-56 w-44 origin-top-right drop-shadow-lg rounded-md divide-y divide-zinc-300 overflow-hidden border border-zinc-200'>
              {links.map(({ nameAndLink, id }) => (
                <Menu.Item
                  as='a'
                  className={`flex w-full items-center justify-between py-2 pr-2 pl-3 bg-white hover:bg-zinc-50`}
                  href={`#${nameAndLink}`}
                  key={id}
                >
                  <div className='text-zinc-700 text-tiny'>{nameAndLink}</div>
                  <svg
                    data-testid='geist-icon'
                    fill='none'
                    height='24'
                    shapeRendering='geometricPrecision'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    // width='24'
                    className='text-zinc-600 h-5 w-5'
                  >
                    <path d='M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z' />
                    <path d='M14 2v6h6' />
                    <path d='M16 13H8' />
                    <path d='M16 17H8' />
                    <path d='M10 9H8' />
                  </svg>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
