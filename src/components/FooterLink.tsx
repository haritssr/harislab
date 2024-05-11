import Link from "next/link";

export default function FooterLink({
	title,
	href,
}: { title: string; href: string }) {
	return (
		<Link className="block hover:underline text-zinc-400" href={href}>
			{title}
		</Link>
	);
}
