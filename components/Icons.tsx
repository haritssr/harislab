export const Logo = () => {
  return (
    <svg viewBox='0 0 300 300' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 '>
      <path
        d='M0 64C0 41.5979 0 30.3968 4.35974 21.8404C8.19467 14.3139 14.3139 8.19467 21.8404 4.35974C30.3968 0 41.5979 0 64 0H236C258.402 0 269.603 0 278.16 4.35974C285.686 8.19467 291.805 14.3139 295.64 21.8404C300 30.3968 300 41.5979 300 64V100H0V64Z'
        fill='#1D4ED8'
      />
      <rect y='100' width='300' height='100' rx='1' fill='#3B82F6' />
      <path
        d='M0 200H300V236C300 258.402 300 269.603 295.64 278.16C291.805 285.686 285.686 291.805 278.16 295.64C269.603 300 258.402 300 236 300H64C41.5979 300 30.3968 300 21.8404 295.64C14.3139 291.805 8.19467 285.686 4.35974 278.16C0 269.603 0 258.402 0 236V200Z'
        fill='#93C5FD'
      />
    </svg>
  );
};

export const SearchIcon2 = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='w-5 h-5 text-zinc-400 hover:text-white'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
    />
  </svg>
);
