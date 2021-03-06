import { Disclosure } from '@headlessui/react';

export default function FAQ({
  button,
  panel,
}: {
  button: React.ReactNode;
  panel: React.ReactNode;
}) {
  return (
    <Disclosure as='div' defaultOpen={true}>
      {({ open }) => (
        <>
          <Disclosure.Button
            as='div'
            className={`${
              open ? 'rounded-b-none ' : ''
            } rounded-lg flex flex-row items-center justify-between py-2 px-3 border border-gray-500  cursor-pointer focus:outline-none  bg-gray-200 font-medium text-gray-700 hover:bg-gray-300`}
          >
            <div>{button}</div>
            <ChevronUp
              className={`${open ? 'transform -rotate-180' : ''} block w-6 h-6 text-gray-700`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className='p-3 text-gray-600 border border-t-0 border-gray-500 rounded-b-lg '>
            {panel}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

const ChevronUp = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`w-5 h-5 ${className}`}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1} d='M5 15l7-7 7 7' />
    </svg>
  );
};
