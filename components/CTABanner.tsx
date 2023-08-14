import Link from 'next/link';

export default function CTABanner({
  title,
  description,
  CTA,
}: {
  title: string;
  description: string;
  CTA: string;
}) {
  return (
    <div className='flex justify-center flex-col items-center space-y-5 mt-60 py-12 sm:py-20 bg-[#F0EFF6] rounded-xl'>
      <div className='font-bold text-3xl sm:text-4xl text-zinc-800 text-center px-5 sm:px-0'>
        {title}
      </div>
      <div className='text-zinc-600 text-lg text-center px-5 sm:px-0'>{description}</div>
      <Link
        href='/bimbel'
        className='rounded-md text-lg bg-gradient-to-b bg-blue-600 hover:bg-blue-700 cursor-pointer w-fit text-white px-4 py-2 text-center transform duration-200'
      >
        {CTA}
      </Link>
    </div>
  );
}
