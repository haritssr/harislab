import SecondNav from "@/components/SecondNav";
import Link from "next/link";

export default function RiwayatPertemuan() {
	return (
		<>
			<SecondNav backTo="/bimbel" backTitle="Bimbel" title="Riwayat Pertemuan" />

			<div className="mt-5 sm:mt-10" />

			{/* Filter */}
			<section className="border border-zinc-300 rounded flex items-center px-3 py-2 justify-between">
				<div className="font-medium">Filter :</div>
				<select name="date" className="text-blue-600">
					<option value="10-terakhir">10 Terakhir</option>
					<option value="hari-ini">Hari Ini</option>
					<option value="bulan-ini">Bulan Ini</option>
					<option value="dari-ke">Dari-Ke</option>
				</select>
			</section>

			<div className="mt-5 sm:mt-10" />

			{/* Data */}
			<section className="space-y-3">
				{dataRiwayatPertemuan.map(({ id, pelajaran, tanggal, guru, time }) => (
					<IndividualRiwayatPertemuan key={id} id={id} pelajaran={pelajaran as "Matematika" | "Fisika"} tanggal={tanggal} guru={guru} time={time} />
				))}
			</section>
		</>
	);
}

interface IndividualRiwayatPertemuanType {
	id: number;
	pelajaran: "Matematika" | "Fisika";
	tanggal: string;
	guru: string;
	time: string;
}

function IndividualRiwayatPertemuan({ id, pelajaran, tanggal, guru, time }: IndividualRiwayatPertemuanType) {
	return (
		<Link href={`/bimbel/riwayat-pertemuan/${id}`} className="block hover:bg-zinc-50 rounded-md border border-zinc-300 px-3 py-2">
			<div className="flex items-center justify-between">
				<div>{pelajaran}</div>
				<div>{time}</div>
			</div>
			<div className="flex items-center justify-between text-zinc-400">
				<div>{guru}</div>
				<div>{tanggal}</div>
			</div>
		</Link>
	);
}

const dataRiwayatPertemuan = [
	{
		id: 1,
		pelajaran: "Fisika",
		tanggal: "Selasa, 3 Maret 2023",
		guru: "Harits Syah",
		time: "15:30 - 17:00",
	},
	{
		id: 2,
		pelajaran: "Fisika",
		tanggal: "Selasa, 3 Maret 2023",
		guru: "Harits Syah",
		time: "15:30 - 17:00",
	},
	{
		id: 3,
		pelajaran: "Matematika",
		tanggal: "Selasa, 3 Maret 2023",
		guru: "Harits Syah",
		time: "15:30 - 17:00",
	},
];
