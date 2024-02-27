import Link from "next/link";

export default function NotFound() {
	return (
		<div className="h-screen w-full flex items-center justify-center">
			<div className="space-y-4">
				<div className="text-2xl text-zinc-600">Halaman Tidak Ditemukan</div>
				<Link className="mx-auto bg-blue-600 block w-fit hover:bg-blue-700 text-white rounded-full px-4 py-1.5" href="/">
					Beranda
				</Link>
			</div>
		</div>
	);
}
