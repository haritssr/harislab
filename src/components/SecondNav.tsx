import BackButton from "./BackButton";

export default function SecondNav({
	backTo,
	title,
	backTitle,
}: { backTo: string; title: string; backTitle: string }) {
	return (
		<div className="px-3 h-10 flex items-center justify-between border-b sm:border-t sm:border-r sm:border-l sm:mt-5 sm:rounded-md sm:mb-10">
			<div className="w-1/3 flex items-center">
				<BackButton href={backTo} title={backTitle} />
			</div>
			<div className="font-medium w-1/3 text-center leading-none sm:leading-normal text-[14px] sm:text-base">
				{title}
			</div>
			<div className="w-1/3" />
		</div>
	);
}
