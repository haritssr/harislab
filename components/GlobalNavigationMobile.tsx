import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

export default function GlobalNavigationMobile() {
  return (
    <div className='sticky bottom-0 block  w-full border-t border-zinc-300 bg-white sm:hidden'>
      <div className='flex w-full items-center '>
        {DataOutline.map(({ title, path }) => (
          <IconWrapper key={title} to={`/${title}`} path={path} />
        ))}
      </div>
    </div>
  );
}

const IconWrapper = ({ to, path }: { to: string; path: React.ReactNode }) => {
  const router = useRouter();
  const color = router.asPath === to ? 'text-blue-600' : 'text-zinc-500';
  function capitalizeFirstLetter(to: string) {
    return to.substring(1).charAt(0).toUpperCase() + to.slice(2);
  }

  return (
    <Link href={`${to === '/home' ? '/' : to}`}>
      <a className='block w-1/5'>
        <div className='flex flex-col items-center justify-center py-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={`h-6 w-6 ${color}`}
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            {path}
          </svg>

          <div className={`text-[10px] -mt-[2px] ${color}`}>{capitalizeFirstLetter(to)}</div>
        </div>
      </a>
    </Link>
  );
};

const DataOutline = [
  {
    title: 'materi',
    path: (
      <>
        <path d='M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z' />
      </>
    ),
  },

  {
    title: 'analisis',
    path: (
      <>
        <path
          fillRule='evenodd'
          d='M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z'
          clipRule='evenodd'
        />
      </>
    ),
  },

  {
    title: 'latihan',
    path: (
      <>
        <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
        <path
          fillRule='evenodd'
          d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
          clipRule='evenodd'
        />
      </>
    ),
  },

  {
    title: 'ujian',
    path: (
      <>
        <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
        <path
          fillRule='evenodd'
          d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
          clipRule='evenodd'
        />
      </>
    ),
  },

  {
    title: 'bimbel',
    path: (
      <>
        <path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z' />
      </>
    ),
  },
];

<svg
  xmlns='http://www.w3.org/2000/svg'
  className='h-6 w-6'
  fill='none'
  viewBox='0 0 24 24'
  stroke='currentColor'
  strokeWidth={2}
>
  <path d='M12 14l9-5-9-5-9 5 9 5z' />
  <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
  <path
    strokeLinecap='round'
    strokeLinejoin='round'
    d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
  />
</svg>;
