import { BookOpenIcon, SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";
import GlobalToolsModal from "./GlobalToolsModal";

export default function Pencarian() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <GlobalToolsModal
      title="Pencarian"
      isOpen={isOpen}
      closeModal={closeModal}
      openModal={openModal}
      icon={<SearchIcon strokeWidth={2} className="h-5 w-5 text-zinc-700" />}
    >
      {/* Search Bar */}
      <section className="flex items-center justify-between space-x-3 px-4">
        <div className=" w-full px-2 py-1 flex items-center space-x-2 bg-[#EBECF0] rounded-md">
          <SearchIcon className="h-5 w-5 text-zinc-800" />
          <input
            type="search"
            placeholder="Cari varibel, rumus, bab,..."
            className="focus:outline-none bg-transparent w-full text-zinc-800 placeholder-zinc-800 caret-blue-500"
          />
        </div>
      </section>
      {/* Link Cepat */}
      <section className="px-8">
        <div className="text-zinc-400 text-tiny">LINK CEPAT</div>
        <div className="space-y-1 overflow-y-auto  divide-y divide-zinc-200">
          {quickLinks.map(({ icon, name }) => (
            <Link
              href="/"
              key={name}
              className="flex items-center space-x-2 py-1 text-zinc-800 hover:bg-apple-gray6"
            >
              <span>{icon}</span>
              <p>{name}</p>
            </Link>
          ))}
        </div>
      </section>
    </GlobalToolsModal>
  );
}
const quickLinks = [
  {
    icon: <BookOpenIcon className="h-5 w-5 text-zinc-700" />,
    name: "Matematika",
  },
  { icon: <BookOpenIcon className="h-5 w-5 text-zinc-700" />, name: "Fisika" },
  {
    icon: <BookOpenIcon className="h-5 w-5 text-zinc-700" />,
    name: "Analisis",
  },
  { icon: <BookOpenIcon className="h-5 w-5 text-zinc-700" />, name: "Latihan" },
  { icon: <BookOpenIcon className="h-5 w-5 text-zinc-700" />, name: "Bimbel" },
  { icon: <BookOpenIcon className="h-5 w-5 text-zinc-700" />, name: "About" },
];
