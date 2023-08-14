import Link from "next/link";
import { Menu } from "@headlessui/react";
export const a =
  "block text-gray-200 hover:bg-harislab hover:text-white rounded px-2 py-1";
import React from "react";

export default function List({
  branch,
  to,
  title,
  children,
}: {
  branch: string;
  to: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="sticky top-0 z-40 -mx-5 md:mx-0 ">
      <Menu as="div" className="flex flex-col w-full mb-5 sm:mb-2 sm:mx-auto ">
        {({ open }) => (
          <>
            <section
              className={`${
                open ? "" : "sm:rounded-b-md sm:drop-shadow-sm"
              } flex items-center justify-between w-full mx-auto bg-white border-b sm:border-b-[1.5px] sm:border-l-[1.5px] sm:border-r-[1.5px] border-gray-300 `}
            >
              <Link
                href={`/${branch}`}
                className=" flex flex-row items-center w-1/4 px-3 py-2.5 text-tiny md:hidden"
              >
                <ChevronLeft />
              </Link>

              <Link
                href={`/${branch}/${to}`}
                className="block w-1/2 py-2.5 font-semibold text-center text-gray-800 sm:pl-5 sm:text-left text-tiny sm:text-lg md:w-1/6"
              >
                {title}
              </Link>

              <Menu.Button className="flex justify-end w-1/4 focus:outline-none md:w-5/6">
                <div className="px-3 py-2.5 text-tiny ">
                  {open ? <X /> : <ChevronDown />}
                </div>
              </Menu.Button>
            </section>

            <Menu.Items className="flex justify-center w-full ">
              <div
                className={`sm:border-l-[1.5px] sm:border-r-[1.5px] w-full p-2 space-y-2 overflow-y-auto border-b border-gray-300 rounded-b-lg shadow-lg bg-gray-50 max-h-96`}
              >
                {children}
              </div>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}

export function NavList({ title, href }: { title: string; href: string }) {
  return (
    <Menu.Item>
      <a
        className={`block text-gray-700 hover:text-white rounded px-2 py-1 hover:bg-gray-700`}
        href={`#${href}`}
      >
        {title}
      </a>
    </Menu.Item>
  );
}

const ChevronDown = () => {
  return (
    <svg
      className="w-6 h-6 text-gray-600 "
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};

const X = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-800 "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 15l7-7 7 7"
      />
    </svg>
  );
};

const ChevronLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-600 hover:text-gray-900"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );
};
