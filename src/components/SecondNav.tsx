import BackButton from "./BackButton";

export default function SecondNav({ backTo, title, backTitle }: { backTo: string; title: string; backTitle: string }) {
	return (
		<div className="px-3 h-10 flex items-center justify-between border-b">
			<div className="w-1/3 flex items-center">
				<BackButton href={backTo} title={backTitle} />
			</div>
			<div className="font-medium w-1/3 text-center leading-none sm:leading-normal text-[13px] sm:text-base">{title}</div>
			<div className="w-1/3"></div>
		</div>
	);
}
