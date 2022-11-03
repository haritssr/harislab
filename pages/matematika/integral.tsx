import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import PenurunanRumus from '@/components/PenurunanRumus';
import LayoutMateri from '@/components/LayoutMateri';
import { IntegralRumus } from 'data/RumusMatematika';
import { IntegralPenurunanRumus } from 'data/PenurunanRumusMatematika';
import { NavList } from '@/components/List';
import List from '@/components/List';
import {
  AA1,
  A2,
  TH,
  TData,
  Row,
  THEAD,
  Body,
  P,
  Gambar,
  Legenda,
  KaTeX,
  rumusTitle,
} from '@/components/DesignSystem';

export default function Integral() {
  return (
    <LayoutMateri browserTitle='Integral' description='Materi Integral'>
      <List branch='matematika' to='Integral' title='Integral'>
        <NavList title='Pengenalan' href='Pengenalan' />
        <NavList title='Konstanta' href='Konstanta' />
        <NavList title='Variabel' href='Variabel' />
        <NavList title='Rumus' href='Rumus' />
        <NavList title='Penurunan Rumus' href='PenurunanRumus' />
        <NavList title='Pembahasan' href='Pembahasan' />
        <NavList title='Contoh Soal' href='ContohSoal' />
      </List>

      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Integral' />
      <A2 title='Siapa yang menggunakan Integral' />
      <A2 title='Dimana Integral digunakan' />
      <A2 title='Kapan Integral digunakan' />
      <AA1 id='Konstanta' title='Konstanta' />

      <AA1 id='Variabel' title='Variabel' />

      <AA1 id='Rumus' title='Rumus' />
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
        {IntegralRumus.map(a => (
          <article className='p-5 bg-white rounded-md shadow-md hover:shadow-lg'>
            <div className={rumusTitle}>{a.nama}</div>
            {typeof a.rumus === 'string' ? (
              <KaTeX>{String.raw`${a.rumus}`}</KaTeX>
            ) : (
              a.rumus.map(b => <KaTeX>{String.raw`${b.step}`}</KaTeX>)
            )}
          </article>
        ))}
      </div>

      <AA1 id='PenurunanRumus' title='Penurunan Rumus' />
      <div className='grid grid-cols-1'>
        {IntegralPenurunanRumus.map(a => (
          <article className='mb-3 overflow-x-auto rounded-md shadow hover:shadow-md'>
            <PenurunanRumus title={a.nama} key={a.nama}>
              {typeof a.rumus === 'string' ? (
                <KaTeX>{String.raw`${a.rumus}`}</KaTeX>
              ) : (
                a.rumus.map(b => <KaTeX>{String.raw`${b.step}`}</KaTeX>)
              )}
            </PenurunanRumus>
          </article>
        ))}
      </div>

      <AA1 id='Pembahasan' title='Pembahasan' />
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum cupiditate
        voluptatibus, facere, sunt illum eveniet quasi fuga consequuntur harum quo magnam facilis
        eos dolores. Sint architecto dolorem ratione. Tempora cumque amet expedita praesentium qui
        quae error laudantium incidunt odit inventore unde enim molestias voluptates aut est, facere
        earum adipisci?
      </P>

      <AA1 id='ContohSoal' title='Contoh Soal' />
      <P>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur qui optio
        libero. Error sequi ea assumenda, minus nobis cupiditate!
      </P>
      <br />
    </LayoutMateri>
  );
}
