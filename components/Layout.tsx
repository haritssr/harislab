import Head from "next/head";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Header from "./Header";
import GlobalNavigation from "./GlobalNavigation";
import GlobalNavigationMobile from "./GlobalNavigationMobile";
import React from "react";

interface LayoutType {
  children: React.ReactNode;
  browserTitle: string;
  description: string;
}

export default function Layout({
  children,
  browserTitle,
  description,
}: LayoutType) {
  const router = useRouter();
  const image = "https://harislab.com/public/HarisLab.png";
  const type = "website";
  // bg-[#f2f1f7]
  return (
    <>
      <Head>
        <title>Haris Lab</title>
        <link rel="icon" href="/logo_harislab.svg" />
        <meta name="theme-color" content="#27272a" />
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />

        <meta property="og:type" content={type} />
        <meta property="og:site_name" content="Haris Lab" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={browserTitle} />
        <meta property="og:image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@haritssr" />
        <meta name="twitter:title" content={browserTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      <GlobalNavigation />

      {router.asPath === "/kalkulator" && <Header title="Kalkulator" />}
      {router.asPath === "/matematika" && <Header title="Matematika" />}
      {router.asPath === "/fisika" && <Header title="Fisika" />}
      {router.asPath === "/bimbel" && <Header title="Bimbel" />}

      <main className="w-full max-w-5xl min-h-screen px-5 mx-auto sm:pb-0 xl:px-0 font-inter ">
        {children}
      </main>

      <Footer />

      <GlobalNavigationMobile />
    </>
  );
}
