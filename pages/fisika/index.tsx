import { DataFisika } from "./../../data/DataFisika";
import Link from "next/link";
import LayoutGlobalNavigation from "@/components/LayoutGlobalNavigation";
import CTABanner from "@/components/CTABanner";
import { Tab } from "@headlessui/react";
import { ChevronRightIcon, FolderIcon } from "@heroicons/react/outline";

export default function Fisika() {
  return (
    <LayoutGlobalNavigation
      globalNavigationTitle="Fisika"
      browserTitle="Fisika"
      description="Mempelajari kegunaan dari Fisika pada feno mena-fenomena fisik di seluruh alam semesta."
    >
      <Tab.Group as="div" className="">
        <div className="flex justify-between items-center mb-5 sm:mb-10 pb-2 sm:-mx-0">
          <Tab.List className=" bg-[#F0EFF6] rounded-lg p-0.5 space-x-1 w-full divide-x divide-zinc-300 sm:w-1/2 flex">
            <Tab as="div" className="w-full">
              {({ selected }) => (
                <button
                  className={`px-4 py-[3px] rounded-md flex items-center justify-center w-full space-x-1 ${
                    selected
                      ? "bg-white shadow shadow-zinc-400/80 duration-100 text-zinc-900"
                      : "hover:bg-zinc-400/20 duration-100 text-zinc-700"
                  }`}
                >
                  <div className="font-medium text-gray-800">Baca</div>
                </button>
              )}
            </Tab>
            <Tab as="div" className="w-full pl-1">
              {({ selected }) => (
                <button
                  className={`px-4 py-[3px] rounded-md flex items-center justify-center w-full space-x-1 ${
                    selected
                      ? "bg-white shadow shadow-zinc-400/80 duration-100 text-zinc-900"
                      : "hover:bg-zinc-400/20 duration-100 text-zinc-700"
                  }`}
                >
                  <div className="font-medium text-gray-800">Analisis</div>
                </button>
              )}
            </Tab>
            <Tab as="div" className="w-full pl-1">
              {({ selected }) => (
                <button
                  className={`px-4 py-[3px] rounded-md flex items-center justify-center w-full space-x-1 ${
                    selected
                      ? "bg-white shadow shadow-zinc-400/80 duration-100 text-zinc-900"
                      : "hover:bg-zinc-400/20 duration-100 text-zinc-700"
                  }`}
                >
                  <div className="font-medium text-gray-800">Latihan</div>
                </button>
              )}
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-8 sm:col-span-6">
              {DataFisika.map(({ domain, chapters }) => (
                // bg-gray-100
                <article key={domain} className="">
                  <div className="flex items-center sm:items-end justify-between ">
                    <div className="text-gray-800 font-bold pl-2 text-lg sm:pl-0">
                      {domain.toUpperCase()}
                    </div>
                  </div>
                  <div className="divide-y divide-zinc-300 rounded-lg h-fit overflow-hidden bg-[#F0EFF6] mt-1 border border-zinc-300">
                    {chapters.map(({ title }) => (
                      <Link
                        key={title}
                        href={`/fisika/${title
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        <div className="flex items-center justify-between pr-2 py-2    cursor-pointer hover:bg-zinc-400/20 pl-3">
                          <div className="items-center flex overflow-hidden">
                            {/* <Folder /> */}
                            <FolderIcon
                              strokeWidth={1.5}
                              className="sm:h-[26px] h-7 w-7 sm:w-[26px] text-blue-600 mr-2 fill-blue-300"
                            />
                            <div className="text-zinc-700 text-[17px] truncate ">
                              {title}
                            </div>
                          </div>
                          <ChevronRightIcon className="h-5 w-5  duration-200 text-gray-700" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </section>
          </Tab.Panel>
          <Tab.Panel>Analisis Soal</Tab.Panel>
          <Tab.Panel>Latihan Soal</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      <CTABanner
        title="Butuh bimbingan belajar Fisika ke rumah?"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        CTA="Pesan Bimbel Fisika"
      />
    </LayoutGlobalNavigation>
  );
}
