import Link from "next/link";

export default function IndividualAnalysis({ id, title, date }: { id: string; title: string; date: string }) {
	return (
		<Link href={`/analisis/list/${id}`} key={id} className="block py-2 px-3 bg-zinc-50 hover:bg-zinc-100 rounded-md border border-zinc-300">
			<div className="">{title}</div>
			<div className="text-zinc-400">{date}</div>
		</Link>
	);
}
