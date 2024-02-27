"use client";

import { useState } from "react";

export default function AnalisisName() {
	const [name, setName] = useState("Analisis Baru");
	return (
		<input
			type="text"
			placeholder="Judul Analisis"
			className="border rounded-md px-3 py-2 w-full mt-5 border-zinc-300 focus:outline-zinc-500"
			defaultValue={name}
			onChange={(e) => {
				e.preventDefault();
				setName(e.target.value);
			}}
			onKeyDown={(e) => {
				if (e.target instanceof HTMLInputElement) {
					if (e.key === "Enter") {
						e.target.blur();
					}
				}
			}}
		/>
	);
}
