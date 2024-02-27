import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from "geist/font/sans";
import GlobalNavigationFirst from "@/components/GlobalNavigationFirst";
import Footer from "@/components/Footer";
import GlobalNavigationMobile from "@/components/GlobalNavigationMobile";

export const metadata: Metadata = {
	title: "Haris Lab",
	description: "Tempat pengelolaan matematika dan fisika tingkat sekolah menengah.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${GeistSans.className} `}>
				<GlobalNavigationFirst />
				<main className="mx-auto min-h-screen px-3 xl:p-0 max-w-3xl">{children}</main>
				<Footer />
				<GlobalNavigationMobile />
			</body>
		</html>
	);
}
