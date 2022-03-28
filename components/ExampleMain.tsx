import { Disclosure } from '@headlessui/react';
import { HiOutlineChevronDown } from 'react-icons/hi';

export default function ExampleMain({
  type,
  children,
}: {
  type: string;
  children: React.ReactNode;
}) {
  return (
    <Disclosure
      as='div'
      className='flex flex-col w-full bg-white rounded-md shadow hover:shadow-md'
    >
      {({ open }) => (
        <>
          <Disclosure.Button
            as='div'
            className='flex items-center justify-between w-full px-4 py-2 rounded-md cursor-pointer focus:outline-none hover:bg-indigo-50'
          >
            <div className='text-gray-700'>{type}</div>

            <HiOutlineChevronDown className={`${open ? 'transform rotate-180' : ''} block`} />
          </Disclosure.Button>
          <Disclosure.Panel className='p-3 overflow-x-auto text-gray-700 bg-white border-t border-gray-300 rounded-b-md '>
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
