export default function InfoBox({
  svg,
  name,
  description,
}: {
  svg: string;
  name: string;
  description: string;
}) {
  return (
    <div className='flex flex-col items-center justify-between px-4 pt-8 pb-4 space-y-4 duration-200 ease-out bg-gray-50 rounded-xl border-zinc-100  border'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className={`w-8 h-8 text-gray-700`}
        // responsive="none"
        viewBox='0 0 24 24'
        stroke='currentColor'
        fill='#f4f4f5'
      >
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d={svg} />
      </svg>
      <div className='text-xl font-semibold leading-tight text-gray-700'>{name}</div>
      <div className='text-center text-gray-500'>{description}</div>
    </div>
  );
}
