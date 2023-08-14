import { Disclosure } from "@headlessui/react";
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";
import { ChevronDownIcon } from "@heroicons/react/outline";
import React from "react";

export default function PenurunanRumus({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Disclosure
      as="div"
      className="flex flex-col w-full mb-3 bg-gray-200 rounded-md"
    >
      {({ open }) => (
        <>
          <Disclosure.Button
            as="div"
            className={`flex items-center justify-between w-full px-3 py-2 cursor-pointer  focus:outline-none rounded-md hover:bg-gray-300 ${
              open ? "rounded-t-md rounded-b-none bg-gray-300" : ""
            } `}
          >
            <TeX className="text-gray-800">{title}</TeX>

            <ChevronDownIcon
              className={`${open ? "transform rotate-180" : ""} block `}
            />
          </Disclosure.Button>

          <Disclosure.Panel className="p-3 overflow-x-auto text-gray-700 bg-gray-200 border-t border-gray-500 rounded-b-md ">
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
