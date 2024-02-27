import { CalculatorIcon, ChartBarSquareIcon, MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import MainFeatureLink from "./MainFeatureLink";

export default function GlobalNavigationFirst() {
	const IconStyle = "w-5 h-5 text-zinc-700 hover:text-zinc-400";
	return (
		<nav className="w-full sticky top-0 border-b">
			<div className="max-w-6xl h-10 mx-auto flex justify-between items-center bg-white px-2 sm:px-0">
				<HomeLink />
				<div className="space-x-10 hidden sm:block">
					{["Referensi", "Analisis", "Tes", "Bimbel"].map((to) => {
						return <MainFeatureLink to={to} key={to} />;
					})}
				</div>
				<div className="space-x-5 flex">
					<Link href="/pencarian">
						<MagnifyingGlassIcon className={IconStyle} />
					</Link>
					<Link href="/pencarian">
						<CalculatorIcon className={IconStyle} />
					</Link>
					<Link href="/pencarian">
						<ChartBarSquareIcon className={IconStyle} />
					</Link>
					<Link href="/pencarian">
						<UserCircleIcon className={IconStyle} />
					</Link>
				</div>
			</div>
		</nav>
	);
}

function HomeLink() {
	return (
		<Link href="/" className="space-x-2 flex items-center">
			<svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ">
				<path
					d="M0 64C0 41.5979 0 30.3968 4.35974 21.8404C8.19467 14.3139 14.3139 8.19467 21.8404 4.35974C30.3968 0 41.5979 0 64 0H236C258.402 0 269.603 0 278.16 4.35974C285.686 8.19467 291.805 14.3139 295.64 21.8404C300 30.3968 300 41.5979 300 64V100H0V64Z"
					fill="#1D4ED8"
				/>
				<rect y="100" width="300" height="100" rx="1" fill="#3B82F6" />
				<path
					d="M0 200H300V236C300 258.402 300 269.603 295.64 278.16C291.805 285.686 285.686 291.805 278.16 295.64C269.603 300 258.402 300 236 300H64C41.5979 300 30.3968 300 21.8404 295.64C14.3139 291.805 8.19467 285.686 4.35974 278.16C0 269.603 0 258.402 0 236V200Z"
					fill="#93C5FD"
				/>
			</svg>
			<p className="font-medium text-zinc-800">Haris Lab</p>
		</Link>
	);
}
