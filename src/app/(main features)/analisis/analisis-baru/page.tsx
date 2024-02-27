"use client";

import AnalisisName from "./AnalisisName";
import MAKISection from "./MAKISection";
import SecondNav from "@/components/SecondNav";

export default function Page() {
	return (
		<>
			<SecondNav backTo="/analisis" backTitle="Analisis" title="Analisis" />
			<section>
				<AnalisisName />
				<div className="h-4" />
				<MAKISection />
				<Spanner />
				<MAKISection />
				<Spanner />
				<MAKISection />
				<Spanner />
				<MAKISection />
			</section>
		</>
	);
}

function Spanner() {
	return <div className="ml-6 h-4 w-2 bg-zinc-300"></div>;
}
