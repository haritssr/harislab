import IndividualAnalysis from "@/components/IndividualAnalysis";
import SecondNav from "@/components/SecondNav";
import { dataAnalisis } from "@/data/data-analisis";

export default function Page() {
	return (
		<>
			<SecondNav backTo="/analisis" backTitle="Analisis" title="Daftar Analisis" />
			<section className="px-3 mt-5 space-y-3">
				{dataAnalisis.map(({ id, title, date }) => (
					<IndividualAnalysis id={id} title={title} date={date} key={id} />
				))}
			</section>
		</>
	);
}
