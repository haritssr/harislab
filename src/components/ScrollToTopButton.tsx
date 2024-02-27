"use client";

import { useEffect } from "react";

export default function ScrollToTopButton() {
	useEffect(() => {
		const scrollToTopButton = document.getElementById("scrollToTopButton");
		scrollToTopButton?.addEventListener("click", function () {
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		});
	}, []);
	return (
		<button
			id="scrollToTopButton"
			className="rounded-md bg-white border border-zinc-300 text-center font-medium py-1 text-zinc-700 hover:bg-zinc-50 w-full"
		>
			Kembali ke atas
		</button>
	);
}
