import Image from 'next/image';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import Link from 'next/link';
import React from 'react';

const ArrowUpRight = () => {
  return (
    <svg
      className='w-5 h-5 text-harislab'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
    >
      <path d='M7 17L17 7' />
      <path d='M7 7h10v10' />
    </svg>
  );
};

//Honestly, poorly designed, consider to delete this since the chapter page is not used anymore and repetitive
//START
export const AA1 = ({ title, id }: { title: string; id: string }) => {
  return (
    <h1 id={id} className={`mt-10 mb-1 text-xl font-semibold text-gray-700`}>
      {title}
    </h1>
  );
};

export const TopicMateri = ({ name, id }: { name: string; id: string }) => {
  return (
    <h3 id={id} className={`mt-10 mb-2 text-xl font-semibold text-gray-700`}>
      {name}
    </h3>
  );
};

export const A2 = ({ title }: { title: string }) => {
  return <h4 className='mb-5 font-medium'>{title}</h4>;
};

export const P = ({ children }: { children: React.ReactNode }) => {
  return <p className='text-gray-700 font-inter indent-sm'>{children}</p>;
};

export const Gambar = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => {
  return (
    <button className='mb-4 -mx-2 sm:-mx-0'>
      <Image
        src={src}
        alt={alt}
        placeholder='blur'
        layout='intrinsic'
        priority
        className='bg-contain rounded-md'
      />
      <figcaption className='text-sm italic text-center text-gray-700'>{caption}</figcaption>
    </button>
  );
};

export const rumusTitle = 'font-medium text-md inline-block w-full  text-pink-600';

const thead = 'border-t border-gray-300';
const th = 'w-1/5 py-2 px-2 sm:px-4 text-left font-medium text-gray-700 bg-gray-200 w-max';
const tr = ' border-b border-l border-r border-gray-300';
const td = 'text-left px-2 sm:px-4 py-0.5 table-auto  text-gray-700 ';

export const THEAD = ({ children }: { children: React.ReactNode }) => {
  return <thead className={thead}>{children}</thead>;
};
export const Row = ({ children }: { children: React.ReactNode }) => {
  return <tr className={tr}>{children}</tr>;
};
export const TH = ({ children }: { children: React.ReactNode }) => {
  return <th className={th}>{children}</th>;
};
export const TData = ({ children }: { children: React.ReactNode }) => {
  return <td className={td}>{children}</td>;
};
export const Body = ({ children }: { children: React.ReactNode }) => {
  return <tbody>{children}</tbody>;
};
export const rms = ({ children }: { children: React.ReactNode }) => {
  return <TeX>{`${children}`}</TeX>;
};
export const Legenda = ({ name, rumus }: { name: string; rumus: string }) => {
  return (
    <button className='py-2'>
      <TeX>{rumus}</TeX> = {name}
    </button>
  );
};

export const KaTeX = ({ children }: { children: React.ReactNode }) => {
  return <TeX className='inline-block py-2 w-max'>{children}</TeX>;
};

export const Anchor = ({ to, name }: { to: string; name: string }) => {
  return (
    <Link href={to}>
      <a className='text-blue-500 hover:text-fuschsia-500 hover:underline'>{name}</a>
    </Link>
  );
};

export function TitleBack({ name, back }: { name: string; back: string }) {
  return (
    <div className='py-5'>
      <button
        className='flex flex-row items-center mb-5 -ml-4 sm:-ml-5 group'
        onClick={() => history.back()}
      >
        <LeftArrow />
        <div className='text-gray-500 group-hover:text-blue-600'>{back}</div>
      </button>
      <h1 className='z-40 block w-full h-auto mx-auto text-3xl font-bold text-left text-gray-700 sm:text-4xl'>
        {name}
      </h1>
    </div>
  );
}
//END

//Typography
export function Title({ name }: { name: string }) {
  return (
    <h1 className='z-40 block w-full h-auto py-10 mx-auto text-3xl font-bold text-left text-gray-700 sm:text-4xl'>
      {name}
    </h1>
  );
}

export function SubTitle({ name }: { name: string }) {
  return <h2 className='mb-10'>{name}</h2>;
}

export const Topic = ({ name }: { name: string }) => {
  return <h3 className='mb-2 text-xl font-semibold text-gray-700 '>{name}</h3>;
};

export function SubTopic({ name }: { name: string }) {
  return <h4 className='mb-1 font-medium text-gray-800'>{name}</h4>;
}

//Button
export function ButtonPrimary({ name }: { name: string }) {
  return (
    <button className='px-4 py-2.5 text-center text-white duration-200 rounded-md bg-harislab hover:bg-opacity-80 '>
      {name}
    </button>
  );
}
export function ButtonSecondary({ name }: { name: string }) {
  return (
    <button className='px-4 py-2 text-center duration-200 border rounded-md border-harislab text-harislab hover:bg-blue-50'>
      {name}
    </button>
  );
}
export function ButtonTertiary({ name }: { name: string }) {
  return (
    <button className='px-4 py-2 text-center duration-200 rounded-md hover:bg-blue-50 text-harislab '>
      {name}
    </button>
  );
}
export function InternalLink({ name, to }: { name: string; to: string }) {
  return (
    <Link href={to}>
      <a className='flex items-center space-x-2 cursor-pointer text-harislab hover:underline'>
        {name}
        <RightArrow />
      </a>
    </Link>
  );
}

export function ExternalLink({ name, to }: { name: string; to: string }) {
  return (
    <a
      href={to}
      target='_blank'
      rel='noreferrer noopener'
      className='flex items-center cursor-pointer text-harislab hover:underline '
    >
      <div>{name}</div>
      <ArrowUpRight />
    </a>
  );
}

const RightArrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-4 h-4 text-harislab'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
    </svg>
  );
};

export const ChevronRight = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-6 h-6'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
    </svg>
  );
};

const LeftArrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-5 h-5 text-gray-500 group-hover:text-blue-600'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 19l-7-7 7-7' />
    </svg>
  );
};
