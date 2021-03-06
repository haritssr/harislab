import Link from 'next/link';

export default function InfoBoxFitur({
  svg,
  name,
  description,
  to,
  ResultOfTheAction,
}: {
  svg: string;
  name: string;
  to: string;
  description: string;
  ResultOfTheAction: string;
}) {
  return (
    <Link href={to}>
      <a className='flex flex-col items-center justify-between px-4 pt-6 pb-5 space-y-2.5 duration-200 ease-out bg-zinc-50 rounded-xl border-zinc-200 hover:border-zinc-500 border'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`w-8 h-8 text-gray-500`}
          // responsive="none"
          viewBox='0 0 24 24'
          stroke='currentColor'
          fill='#f4f4f5'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d={svg} />
        </svg>

        <div className='text-xl font-semibold leading-tight text-gray-700'>{name}</div>

        <div className='mx-auto text-center text-gray-500 sm:w-5/6'>{description}</div>

        <div className='flex items-center space-x-2 cursor-pointer text-harislab hover:underline'>
          {ResultOfTheAction}
          <RightArrow />
        </div>
      </a>
    </Link>
  );
}
const RightArrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-4 h-5 text-harislab'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
    </svg>
  );
};
