import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function FeatureFunctionLink({ to, title, props, icon }: { to: string; title: string; props?: any; icon: React.ReactElement }) {
	return (
		<Link
			className="w-full sm:w-1/2 flex justify-between items-center space-x-2 border border-zinc-300 pl-3 pr-3 py-1.5 bg-zinc-50 hover:bg-zinc-100 rounded-md"
			{...props}
			href={to}
		>
			<span className="flex items-center space-x-2">
				<span className="inline-block">{icon}</span>
				<p className="inline-block text-zinc-700">{title}</p>
			</span>
			<ChevronRightIcon className="w-4 h-4 text-zinc-500" />
		</Link>
	);
}
