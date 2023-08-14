import Head from "next/head";
import Footer from "./Footer";
import GlobalNavigation from "./GlobalNavigation";
import React from "react";

export default function LayoutMateri({
  children,
  browserTitle,
  description,
}: {
  children: React.ReactNode;
  browserTitle: string;
  description: string;
}) {
  const image = "https://harislab.com/public/HarisLab.png";
  const type = "website";
  return (
    <div className="bg-[#f2f1f7]">
      <Head>
        <title>Haris Lab</title>
        <link rel="icon" href="/logo.svg" />
        <meta name="theme-color" content="#27272a" />
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content="HarisLab" />
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

      <main className="w-full max-w-5xl min-h-screen px-5 mx-auto sm:pb-0 xl:px-0 font-inter ">
        {children}
      </main>

      <Footer />
    </div>
  );
}
