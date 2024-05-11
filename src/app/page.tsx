import Link from "next/link";
import Balancer from "react-wrap-balancer";
import {
	AcademicCapIcon,
	BookOpenIcon,
	CalculatorIcon,
	ChartBarSquareIcon,
	ClipboardDocumentListIcon,
	MagnifyingGlassIcon,
	ScaleIcon,
	UserCircleIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
	return (
		<main>
			<Definition />
			<div className="border-b my-10" />
			<Features />
		</main>
	);
}

function Definition() {
	return (
		<section className="space-y-5 mt-14 sm:mt-20">
			<div className="w-full justify-center space-y-4">
				<h1 className="text-3xl sm:text-5xl font-bold text-zinc-800 text-center max-w-3xl sm:leading-tight">
					<Balancer>Tempat pengelolaan matematika dan fisika.</Balancer>
				</h1>
				<p className="text-zinc-600 text-center w-full">
					<Balancer>
						Informasi, analisis, tes, dan pemesanan bimbel matematika fisika
						tingkat sekolah menengah.
					</Balancer>
				</p>
			</div>
			<div className="flex items-center space-x-4 w-full justify-center ">
				<Link
					className="rounded-md px-4 py-1.5 text-white font-medium bg-blue-600 hover:bg-blue-700"
					href="/analisis"
				>
					Analisis Soal
				</Link>
				<Link
					className="rounded-md px-4 py-1.5 text-zinc-800 font-medium bg-white shadow-sm hover:bg-zinc-50 border border-zinc-300 hover:border-zinc-400"
					href="/bimbel"
				>
					Pesan Bimbel
				</Link>
			</div>
		</section>
	);
}

function Features() {
	const IconStyle = "w-6 h-6 text-zinc-500";
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
			<section className="space-y-3">
				<h2 className="text-lg text-zinc-500 text-center sm:text-left">
					Fitur Utama
				</h2>
				<FeatureLink
					logo={<BookOpenIcon className={IconStyle} />}
					title="Referensi"
					description="Sumber informasi pelajaran"
				/>
				<FeatureLink
					logo={<ScaleIcon className={IconStyle} />}
					title="Analisis"
					description="Managemen pengerjaan soal"
				/>
				<FeatureLink
					logo={<ClipboardDocumentListIcon className={IconStyle} />}
					title="Tes"
					description="Mengerjakan tes soal"
				/>
				<FeatureLink
					logo={<AcademicCapIcon className={IconStyle} />}
					title="Bimbel"
					description="Bimbingan belajar ke rumah"
				/>
			</section>
			<section className="space-y-3">
				<h2 className="text-lg text-zinc-500 text-center sm:text-left">
					Fitur Pendukung
				</h2>
				<FeatureLink
					logo={<MagnifyingGlassIcon className={IconStyle} />}
					title="Pencarian"
					description="Sumber informasi pelajaran"
				/>
				<FeatureLink
					logo={<CalculatorIcon className={IconStyle} />}
					title="Kalkulator"
					description="Managemen pengerjaan soal"
				/>
				<FeatureLink
					logo={<ChartBarSquareIcon className={IconStyle} />}
					title="Statistik"
					description="Mengerjakan tes soal"
				/>
				<FeatureLink
					logo={<UserCircleIcon className={IconStyle} />}
					title="Profil"
					description="Bimbingan belajar ke rumah"
				/>
			</section>
		</div>
	);
}

function FeatureLink({
	logo,
	title,
	description,
}: { logo: React.ReactNode; title: string; description: string }) {
	return (
		<Link
			href={`/${title.toLowerCase()}`}
			className="border border-zinc-300 hover:bg-zinc-100 bg-zinc-50 rounded-md px-2 pt-2 pb-1.5 flex space-x-2 "
		>
			{logo}
			<div>
				<p className="font-semibold">{title}</p>
				<p className="text-zinc-600">{description}</p>
			</div>
		</Link>
	);
}
