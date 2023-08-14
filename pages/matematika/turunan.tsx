import "katex/dist/katex.min.css";
import PenurunanRumus from "@/components/PenurunanRumus";
import LayoutMateri from "@/components/LayoutMateri";
import { TurunanPenurunanRumus } from "data/PenurunanRumusMatematika";
import { NavList } from "@/components/List";
import List from "@/components/List";
import { AA1, A2, P, KaTeX } from "@/components/DesignSystem";

export default function Turunan() {
  return (
    <LayoutMateri browserTitle="Turunan" description="Materi Turunan">
      <List branch="matematika" to="Turunan" title="Turunan">
        <NavList title="Pengenalan" href="Pengenalan" />
        <NavList title="Konstanta" href="Konstanta" />
        <NavList title="Variabel" href="Variabel" />
        <NavList title="Rumus" href="Rumus" />
        <NavList title="Penurunan Rumus" href="PenurunanRumus" />
        <NavList title="Pembahasan" href="Pembahasan" />
        <NavList title="Contoh Soal" href="ContohSoal" />
      </List>

      <AA1 id="Pengenalan" title="Pengenalan" />
      <A2 title="Apa itu Turunan" />
      <A2 title="Siapa yang menggunakan Turunan" />
      <A2 title="Dimana Turunan digunakan" />
      <A2 title="Kapan Turunan digunakan" />

      <AA1 id="Konstanta" title="Konstanta" />

      <AA1 id="Variabel" title="Variabel" />

      <AA1 id="Rumus" title="Rumus" />

      <AA1 id="PenurunanRumus" title="Penurunan Rumus" />
      <div className="grid grid-cols-1">
        {TurunanPenurunanRumus.map((a) => (
          // perlu di selidiki, apakah perlu ditambahkan article ini, dan key: bisa dipindah ke <PenurunanRumus>
          <PenurunanRumus title={a.nama} key={a.nama}>
            {typeof a.rumus === "string" ? (
              <KaTeX>{String.raw`${a.rumus}`}</KaTeX>
            ) : (
              a.rumus.map((b) => (
                <KaTeX key={b.step}>{String.raw`${b.step}`}</KaTeX>
              ))
            )}
          </PenurunanRumus>
        ))}
      </div>

      <AA1 id="Pembahasan" title="Pembahasan" />
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        dolorum cupiditate voluptatibus, facere, sunt illum eveniet quasi fuga
        consequuntur harum quo magnam facilis eos dolores. Sint architecto
        dolorem ratione. Tempora cumque amet expedita praesentium qui quae error
        laudantium incidunt odit inventore unde enim molestias voluptates aut
        est, facere earum adipisci?
      </P>

      <AA1 id="ContohSoal" title="Contoh Soal" />
      <P>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
        consequatur qui optio libero. Error sequi ea assumenda, minus nobis
        cupiditate!
      </P>
      <br />
    </LayoutMateri>
  );
}
