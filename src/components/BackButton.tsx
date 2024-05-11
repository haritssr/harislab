import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function BackButton({
	href,
	title,
}: { href: string; title: string }) {
	return (
		<Link passHref href={href}>
			<span className="group flex items-center">
				<ChevronLeftIcon
					className="-ml-2 h-4 sm:h-[18px] w-4 sm:w-[18px] text-blue-600 sm:group-hover:text-blue-400"
					strokeWidth={2}
				/>
				<span className="-ml-0.5 block truncate text-blue-600 sm:group-hover:text-blue-400 hover:underline text-[14px] sm:text-base">
					{title}
				</span>
			</span>
		</Link>
	);
}
