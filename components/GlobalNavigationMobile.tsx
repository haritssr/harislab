import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { TitleAndPathData } from "data/TitleAndPathData";

export default function GlobalNavigationMobile() {
  return (
    <div className="sticky bottom-0 block  w-full border-t border-zinc-300 bg-white/70 saturate-150 backdrop-blur-lg sm:hidden">
      <div className="flex w-full items-center ">
        {TitleAndPathData.map(({ title, path }) => (
          <IconWrapper key={title} to={`/${title}`} path={path} />
        ))}
      </div>
    </div>
  );
}

const IconWrapper = ({ to, path }: { to: string; path: React.ReactNode }) => {
  const router = useRouter();
  let color: string;
  if (router.asPath === to) {
    color = "text-blue-600";
  } else if (router.asPath === "/" && to === "/home") {
    color = "text-blue-600/90";
  } else {
    color = "text-zinc-500";
  }
  function capitalizeFirstLetter(to: string) {
    return to.substring(1).charAt(0).toUpperCase() + to.slice(2);
  }

  return (
    <Link
      passHref
      href={`${to === "/home" ? "/" : to}`}
      className="block w-1/5"
    >
      <div className="flex flex-col items-center justify-center py-[5px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${color}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          {path}
        </svg>

        <div className={`text-[11px] leading-[15px] -mt-[1px] ${color}`}>
          {capitalizeFirstLetter(to)}
        </div>
      </div>
    </Link>
  );
};