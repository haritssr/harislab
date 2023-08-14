import Link from "next/link";
import { Logo } from "@/components/Icons";
import React from "react";

export default function Footer() {
  const a = "block text-zinc-500  hover:underline ";
  return (
    <footer className="bottom-0 w-full mt-32 border-t border-zinc-200 bg-zinc-50 ">
      <section className="flex flex-col sm:flex-row-reverse sm:justify-between px-5 py-2 sm:py-10 sm:px-0 max-w-5xl mx-auto">
        <section className="hidden sm:block">
          <section className="flex p-5 lg:p-0 space-x-10 sm:justify-end sm:space-x-14 ">
            <FooterBox title="Layanan">
              <Link href="/matematika" className={a}>
                Matematika
              </Link>
              <Link href="/fisika" className={a}>
                Fisika
              </Link>
              <Link href="/kalkulator" className={a}>
                Kalkulator
              </Link>
              <Link href="/bimbel" className={a}>
                Bimbel
              </Link>
            </FooterBox>
            <FooterBox title="INFORMASI">
              <Link href="/pricing" className={a}>
                Pricing
              </Link>
              <Link href="/privacy-policy" className={a}>
                Privacy Policy
              </Link>
              <Link href="/terms-and-service" className={a}>
                Terms and Service
              </Link>
              <Link href="/sitemap" className={a}>
                Sitemap
              </Link>
            </FooterBox>
          </section>
        </section>
        <section className="p-0 sm:p-5 lg:p-0 sm:space-y-4 sm:w-1/3 flex sm:block items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
            <div className="font-semibold text-zinc-800 text-lg sm:text-xl -mt-[1.5px]">
              Haris Lab
            </div>
          </Link>
          <div className="hidden sm:block">
            <div className="text-zinc-700 text-xl mb-4">
              Belajar matematika fisika online dan pesan bimbel ke rumah.
            </div>
            <div className="text-zinc-500 ">
              Copyright &copy; Haris Lab Inc.{" "}
              <span className="text-sm">2021—{new Date().getFullYear()}</span>
            </div>
            <div className="text-zinc-500">
              by{" "}
              <a
                href="https://www.haritssr.com"
                target="_blank"
                rel="noreferrer noopener"
                className=" underline sm:hover:underline hover:text-blue-600"
              >
                Harits Syah
              </a>
            </div>
            <div className="block sm:hidden">
              <div className="flex space-x-2 text-[12px]">
                <Link href="/privacy" className={a}>
                  Privacy
                </Link>
                <Link href="/terms" className={a}>
                  Terms
                </Link>
                <Link href="/sitemap" className={a}>
                  Sitemap
                </Link>
                <Link href="/about" className={a}>
                  About
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/about-us"
            className="inline-block sm:hidden text-blue-600"
          >
            More Info
          </Link>
        </section>
      </section>
    </footer>
  );
}

const FooterBox = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={` ${className} space-y-3 text-zinc-500 sm:pt-0`}>
      <div className="font-semibold text-zinc-800 font-inter uppercase text-sm">
        {title}
      </div>
      <address className="space-y-2 not-italic">{children}</address>
    </div>
  );
};
