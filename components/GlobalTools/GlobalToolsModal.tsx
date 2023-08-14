import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

export default function GlobalToolsModal({
  children,
  icon,
  isOpen,
  closeModal,
  openModal,
  title,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  isOpen: boolean;
  closeModal: any;
  openModal: any;
  title: string;
}) {
  return (
    <div>
      <section
        title={title}
        onClick={openModal}
        className='p-1.5 hover:bg-zinc-100  active:ring-1 active:ring-zinc-700 rounded-md group flex items-center hover:cursor-pointer  md:space-x-1 duration-100 ease-out'
      >
        {icon}
      </section>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='fixed inset-0 z-50 overflow-y-auto' onClose={closeModal}>
          <div className='h-full p-4 flex justify-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-100'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-black/70' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className='inline-block h-[50vh] align-middle ' aria-hidden='true'>
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter='ease-out duration-100'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-100'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              {/* Modal */}
              <section className='inline-block w-full max-w-sm overflow-hidden transition-all transform  bg-white rounded-xl h-full sm:h-auto border border-zinc-300 space-y-3'>
                {/* Header */}
                <section className='bg-[#F2F2F7] flex items-center py-2 border-b border-zinc-300 px-4'>
                  <div className='w-1/3'></div>
                  <div className='w-1/3 font-semibold text-center'>{title}</div>
                  <div onClick={closeModal} className='w-1/3  justify-end flex'>
                    <div className='text-blue-600 hover:text-blue-400 lg:hover:text-blue-600 lg:hover:bg-zinc-200 rounded cursor-pointer lg:px-2 py-[1px]'>
                      Selesai
                    </div>
                  </div>
                </section>
                {children}
              </section>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
