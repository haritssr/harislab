import { Dialog, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState, Fragment } from "react";
import { SearchIcon2 } from "./Icons";

export default function Search() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div
        onClick={openModal}
        className="py-1.5 sm:py-1 px-1.5 sm:px-2 rounded-md group flex items-center hover:cursor-pointer md:space-x-1 duration-100 ease-out"
      >
        <SearchIcon
          strokeWidth={2}
          className="h-5 w-5 md:h-4 md:w-4 text-zinc-600 group-hover:text-blue-800 sm:group-hover:text-zinc-800 group-active:text-blue-600"
        />
        <div className="hidden md:block text-sm text-zinc-600 sm:group-hover:text-zinc-800 group-active:text-blue-600">
          Pencarian
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-100"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-[50vh] align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-100"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className=" inline-block w-full sm:max-w-md mt-[10vh] overflow-hidden align-middle transition-all transform  bg-zinc-800/90 backdrop-blur-md shadow-xl rounded-xl h-[50vh]">
                <div className="flex items-center justify-between space-x-3 px-3 pt-3">
                  <div className=" w-full  px-3 py-1.5 flex items-center space-x-2 bg-zinc-800/90 backdrop-blur-md rounded-md">
                    <SearchIcon2 />
                    <input
                      type="search"
                      placeholder="Cari di semua halaman..."
                      className="focus:outline-none text-tiny bg-transparent w-full text-zinc-200 placeholder-zinc-400 caret-blue-500"
                    />
                  </div>
                  {/* <div
                    onClick={closeModal}
                    className='text-blue-500 cursor-pointer hover:underline'
                  >
                    Tutup
                  </div> */}
                </div>
                <div className="w-full text-left  text-sm space-y-2 p-3">
                  <div className="text-zinc-300 text-[10px] tracking-wider">
                    SUGESTI PENCARIAN
                  </div>
                  <ul className="space-y-1 pl-4">
                    <li>
                      <Link
                        href="/matematika"
                        className="text-zinc-400 hover:text-white block w-full"
                      >
                        Matematika
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/fisika"
                        className="text-zinc-400 hover:text-white block w-full"
                      >
                        Fisika
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/bimbel"
                        className="text-zinc-400 hover:text-white block w-full"
                      >
                        Bimbel
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/kalkulator"
                        className="text-zinc-400 hover:text-white block w-full"
                      >
                        Kalkulator
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
