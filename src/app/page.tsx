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
					<Balancer>Tempat Pengelolaan Matematika dan Fisika.</Balancer>
				</h1>
				<p className="text-zinc-600 text-center w-full">
					<Balancer className="sm:text-lg">
						Referensi, Analisis, Ujian, dan Bimbel matematika fisika tingkat
						sekolah menengah.
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
					description="Informasi dan data matematika fisika"
				/>
				<FeatureLink
					logo={<ScaleIcon className={IconStyle} />}
					title="Analisis"
					description="Managemen pengerjaan soal"
				/>
				<FeatureLink
					logo={<ClipboardDocumentListIcon className={IconStyle} />}
					title="Ujian"
					description="Mengerjakan soal dengan waktu"
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
					description="Cari informasi matematika fisika"
				/>
				<FeatureLink
					logo={<CalculatorIcon className={IconStyle} />}
					title="Kalkulator"
					description="Aritmatika dan hubungan rumus"
				/>
				<FeatureLink
					logo={<ChartBarSquareIcon className={IconStyle} />}
					title="Statistik"
					description="Melihat perilaku seiring waktu"
				/>
				<FeatureLink
					logo={<UserCircleIcon className={IconStyle} />}
					title="Profil"
					description="Data diri dan pengaturan"
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
			className="group border border-zinc-300 hover:bg-blue-50 hover:border-blue-700 bg-zinc-50/50 rounded-md px-2 pt-2 pb-1.5 flex space-x-2"
		>
			<div className="group-hover:text-blue-700">{logo}</div>
			<div>
				<p className="font-semibold group-hover:text-blue-700">{title}</p>
				<p className="text-zinc-600 group-hover:text-blue-700">{description}</p>
			</div>
		</Link>
	);
}
