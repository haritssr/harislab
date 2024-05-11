"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainFeatureLink({ to }: { to: string }) {
	const pathname = usePathname();
	const color = pathname.startsWith(`/${to.toLowerCase()}`)
		? "text-blue-600"
		: "text-zinc-600 hover:text-zinc-400";
	const LinkStyle = `duration-900 ${color}`;

	return (
		<Link className={LinkStyle} href={`/${to.toLowerCase()}`}>
			{to}
		</Link>
	);
}
