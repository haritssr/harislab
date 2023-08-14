import "katex/dist/katex.min.css";
import Layout from "@/components/Layout";
import { GlosariumVar } from "data/VariabelFisika";
import {
  TH,
  TData,
  Row,
  THEAD,
  Body,
  KaTeX,
  TitleBack,
} from "@/components/DesignSystem";

export default function fisikaVariabel() {
  return (
    <Layout browserTitle="Variabel Fisika" description="Variabel Fisika">
      <TitleBack back="Fisika" name="Variabel Fisika" />
      <section className="mx-auto overflow-x-auto sm:gap-5 lg:px-0">
        <table className="w-full min-w-full border table-max">
          <THEAD>
            <Row>
              <TH>Simbol</TH>
              <TH>Nama</TH>
              <TH>Satuan</TH>
            </Row>
          </THEAD>

          <Body>
            {GlosariumVar.map((a) => (
              <Row key={a.satuan}>
                <TData>
                  <KaTeX>{String.raw`${a.simbol}`}</KaTeX>
                </TData>
                <TData>{a.nama}</TData>
                <TData>
                  <KaTeX>{String.raw`${a.satuan}`}</KaTeX>
                </TData>
              </Row>
            ))}
          </Body>
        </table>
      </section>
    </Layout>
  );
}
