import FeatureFunctionLink from "@/components/FeatureFunctionLink";
import { ListBulletIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function Analisis() {
	return (
		<section className="py-10 space-y-4">
			<h1 className="font-semibold text-3xl">Analisis</h1>
			<FeatureFunctionLink to="/analisis/analisis-baru" title="Buat Analisis" icon={<PlusIcon className="w-[18px] h-[18px] text-zinc-700" />} />
			<FeatureFunctionLink
				to="/analisis/daftar-analisis"
				title="Daftar Analisis"
				icon={<ListBulletIcon className="w-[18px] h-[18px] text-zinc-700" />}
			/>
		</section>
	);
}
