import FeatureFunctionLink from "@/components/FeatureFunctionLink";
import PageHeading from "@/components/PageHeading";
import { BanknotesIcon, CalendarDaysIcon, ClockIcon, PlusIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function Bimbel() {
	return (
		<section className="col-span-1 lg:col-span-4 py-10 space-y-4">
			<PageHeading>Bimbel</PageHeading>
			<FeatureFunctionLink to="/bimbel/pesan-bimbel" title="Pesan Bimbel" icon={<PlusIcon className="w-[18px] h-[18px] text-zinc-700" />} />
			<FeatureFunctionLink to="/bimbel/kalender" title="Kalender" icon={<CalendarDaysIcon className="w-[18px] h-[18px] text-zinc-700" />} />
			<FeatureFunctionLink to="/bimbel/akan-datang" title="Jadwal Akan Datang" icon={<ClockIcon className="w-[18px] h-[18px] text-zinc-700" />} />
			<FeatureFunctionLink
				to="/bimbel/riwayat-pertemuan"
				title="Riwayat Pertemuan"
				icon={<UserGroupIcon className="w-[18px] h-[18px] text-zinc-700" />}
			/>
			<FeatureFunctionLink
				to="/bimbel/riwayat-pembayaran"
				title="Riwayat Pembayaran"
				icon={<BanknotesIcon className="w-[18px] h-[18px] text-zinc-700" />}
			/>
		</section>
	);
}
