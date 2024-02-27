import { ChevronDownIcon, PlusIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import * as Accordion from "@radix-ui/react-accordion";
import * as Switch from "@radix-ui/react-switch";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useState } from "react";

export default function MAKISection() {
	const [textAreaFilled, setTextAreaFilled] = useState(false);

	function handleOnType(e: React.ChangeEvent<HTMLTextAreaElement>) {
		e.preventDefault();
		console.log(e.target.value);
		e.target.value.length > 0 ? setTextAreaFilled(true) : setTextAreaFilled(false);
	}
	return (
		<Accordion.Root className="rounded-md border border-zinc-300 overflow-hidden" type="single" defaultValue="item-1" collapsible>
			<Accordion.Item value="item-1" className="group">
				<Accordion.Header className="w-full border-b border-zinc-300 pl-3 pr-2 py-1.5 bg-zinc-50 flex items-center justify-between  group-rdx-state-closed:border-none">
					<div className="flex items-center space-x-2">
						{/* Section Title */}
						<div className="font-medium">Masalah</div>
						{/* Section Tooltip */}
						<Tooltip.Provider>
							<Tooltip.Root>
								<Tooltip.Trigger className="flex items-center rounded px-1 py-0.5 hover:bg-zinc-100 ">
									<QuestionMarkCircleIcon className="h-4 w-4 text-zinc-400" strokeWidth={2} />
								</Tooltip.Trigger>
								<Tooltip.Content side="top" align="center" className="rounded-md shadow-md px-2.5 py-1.5 text-zinc-700 border bg-white">
									<div>Masalah adalah soal yang akan dikerjakan</div>
									<Tooltip.Arrow offset={5} width={10} height={5} className="fill-zinc-300" />
								</Tooltip.Content>
							</Tooltip.Root>
						</Tooltip.Provider>
					</div>

					{/* Filled or Not */}
					{textAreaFilled ? <ThreeDots /> : null}

					<div className="flex items-center space-x-2">
						{/* Edit Toggle */}
						<Switch.Root
							id="s1"
							className="block w-[34px] p-[3px] rdx-state-unchecked:bg-zinc-600  rounded-full  rdx-state-checked:bg-green-600 items-center"
						>
							<Switch.Thumb className="block h-3.5 w-3.5 rounded-full bg-white will-change-transform rdx-state-checked:translate-x-[14px] shadow  rdx-state-checked:bg-white duration-100" />
						</Switch.Root>

						{/* Toggle Open and Close */}
						<Accordion.Trigger className="hover:bg-zinc-200 p-1.5 rounded">
							<ChevronDownIcon className="w-4 h-4 group-rdx-state-open:rotate-180" />
						</Accordion.Trigger>
					</div>
				</Accordion.Header>
				<Accordion.Content>
					{/* Rich Text Area */}
					<textarea className="w-full px-3 py-2 focus:outline-none" onChange={handleOnType}></textarea>

					{/* Action Buttons */}
					<section className="p-2 border-t border-zinc-300 flex items-center space-x-2">
						<MAKIActionButton />
						<MAKIActionButton />
						<MAKIActionButton />
					</section>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	);
}

function MAKIActionButton() {
	return (
		<button className="rounded-md px-1.5 py-0.5 border border-zinc-300 text-sm hover:bg-zinc-50 flex space-x-0.5 items-center hover:border-zinc-300">
			<span className="text-zinc-500">Action</span>
			<PlusIcon className="h-[14px] w-[14px] text-zinc-500" strokeWidth={2} />
		</button>
	);
}

function ThreeDots() {
	return (
		<div className="flex space-x-2 items-center ">
			<div className="h-1.5 w-1.5 bg-zinc-400 rounded-full"></div>
			<div className="h-1.5 w-1.5 bg-zinc-400 rounded-full"></div>
			<div className="h-1.5 w-1.5 bg-zinc-400 rounded-full"></div>
		</div>
	);
}
