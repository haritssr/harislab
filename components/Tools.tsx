import Search from './Search';
import SearchLight from './SearchLight';
import { CalculatorIcon, UserCircleIcon } from '@heroicons/react/outline';

export default function Tools() {
  return (
    <div className='items-center flex sm:w-1/6 justify-end'>
      <Search />
      <div className='py-1.5 sm:py-1 px-1.5 sm:pl-2 sm:pr-3 rounded-md group flex items-center hover:cursor-pointer md:space-x-1 duration-100 ease-out' title='Kalculator'>
        <CalculatorIcon
          strokeWidth={2}
          className='h-5 w-5 sm:h-[18px] sm:w-[18px] text-zinc-300 group-hover:text-blue-800 sm:group-hover:text-white group-active:text-blue-600'
        />
        {/* <div className='hidden md:block text-sm text-zinc-300 sm:group-hover:text-white group-active:text-blue-600'>
          Kalkulator
        </div> */}
      </div>
      <div className='py-1.5 sm:pb-[3px] sm:pt-[2px] px-1.5 sm:px-3  rounded-md group flex items-center hover:cursor-pointer duration-200 ease-out sm:border bg-zinc-700 sm:border-zinc-500 sm:hover:border-zinc-white active:border-blue-600 hover:border-blue-600 active:ring-1 active:ring-blue-600'>
        <UserCircleIcon
          strokeWidth={1.8}
          className='h-5 w-5 text-zinc-300 sm:group-hover:text-black group-active:text-white sm:hidden'
        />
        <div className='hidden md:block text-sm text-white font-semibold'>Masuk</div>
      </div>
    </div>
  );
}


export function ToolsLight() {
    return (
      <div className='items-center flex space-x-2 sm:w-1/6 justify-end'>
        <SearchLight />
        <div className='py-1.5 sm:py-1 px-1.5 sm:px-2 rounded-md group flex items-center hover:cursor-pointer md:space-x-1 duration-100 ease-out'>
          <CalculatorIcon
            strokeWidth={1.8}
            className='h-5 w-5 md:h-4 md:w-4 text-zinc-700 group-hover:text-blue-800 sm:group-hover:text-zinc-800 group-active:text-blue-600'
          />
          <div className='hidden md:block text-sm text-zinc-700 sm:group-hover:text-zinc-800 group-active:text-blue-600'>
            Kalkulator
          </div>
        </div>
        <div className='py-1.5 sm:pb-[3px] sm:pt-[2px] px-1.5 sm:px-3  rounded-md group flex items-center hover:cursor-pointer duration-100 ease-out sm:border bg-zinc-200 hover:bg-zinc-300 sm:border-zinc-400 active:ring-1 active:ring-zinc-700'>
          <UserCircleIcon
            strokeWidth={1.8}
            className='h-5 w-5 md:h-4 md:w-4 text-zinc-700 sm:group-hover:text-black group-active:text-zinc-800 sm:hidden'
          />
          <div className='hidden md:block text-sm text-zinc-700 font-semibold'>Masuk</div>
        </div>
      </div>
    );
  }