import "katex/dist/katex.min.css";
import Layout from "@/components/Layout";
import {
  TH,
  TData,
  Row,
  THEAD,
  Body,
  KaTeX,
  TitleBack,
} from "@/components/DesignSystem";

export default function satuanSI() {
  return (
    <Layout
      browserTitle="Satuan Sistem Internasional"
      description="Satuan Sistem Internasional"
    >
      <TitleBack back="Fisika" name="Sistem Satuan Internasional" />
      <section className="mx-auto overflow-x-auto sm:gap-5 lg:px-0">
        <table className="w-full min-w-full border table-max">
          <THEAD>
            <Row>
              <TH>Nama Satuan</TH>
              <TH>Simbol Satuan</TH>
              <TH>Simbol Dimensi</TH>
              <TH>Nama Besaran</TH>
            </Row>
          </THEAD>
          <Body>
            <Row>
              <TData>detik</TData>
              <TData>s</TData>
              <TData>T</TData>
              <TData>waktu</TData>
            </Row>
            <Row>
              <TData>meter</TData>
              <TData>m</TData>
              <TData>L</TData>
              <TData>panjang</TData>
            </Row>
            <Row>
              <TData>kilogram</TData>
              <TData>kg</TData>
              <TData>M</TData>
              <TData>massa</TData>
            </Row>
            <Row>
              <TData>ampere</TData>
              <TData>A</TData>
              <TData>I</TData>
              <TData>arus listrik</TData>
            </Row>
            <Row>
              <TData>kelvin</TData>
              <TData>K</TData>
              <TData>
                <KaTeX>{String.raw`\Theta`}</KaTeX>
              </TData>
              <TData>suhu termodinamika</TData>
            </Row>
            <Row>
              <TData>mol</TData>
              <TData>mol</TData>
              <TData>N</TData>
              <TData>jumlah zat</TData>
            </Row>
            <Row>
              <TData>kandela</TData>
              <TData>cd</TData>
              <TData>J</TData>
              <TData>intensitas cahaya</TData>
            </Row>
          </Body>
        </table>
      </section>
    </Layout>
  );
}
