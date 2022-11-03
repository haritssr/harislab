import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import LayoutMateri from '@/components/LayoutMateri';
import { NavList } from '@/components/List';
import List from '@/components/List';
import { LogaritmaRumus } from 'data/RumusMatematika';
import { LogaritmaPenurunanRumus } from 'data/PenurunanRumusMatematika';
import PenurunanRumus from '@/components/PenurunanRumus';
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

export default function Logaritma() {
  return (
    <LayoutMateri browserTitle='Logaritma' description='Materi Logaritma'>
      <List branch='matematika' to='Logaritma' title='Logaritma'>
        <NavList title='Pengenalan' href='Pengenalan' />
        <NavList title='Konstanta' href='Konstanta' />
        <NavList title='Variabel' href='Variabel' />
        <NavList title='Rumus' href='Rumus' />
        <NavList title='Penurunan Rumus' href='PenurunanRumus' />
        <NavList title='Pembahasan' href='Pembahasan' />
        <NavList title='Contoh Soal' href='ContohSoal' />
        <NavList title='Pengenalan' href='Pengenalan' />
        <NavList title='Konstanta' href='Konstanta' />
        <NavList title='Variabel' href='Variabel' />
        <NavList title='Rumus' href='Rumus' />
        <NavList title='Penurunan Rumus' href='PenurunanRumus' />
        <NavList title='Pembahasan' href='Pembahasan' />
        <NavList title='Contoh Soal' href='ContohSoal' />
      </List>

      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Logaritma' />
      <A2 title='Siapa yang menggunakan Logaritma' />
      <A2 title='Dimana Logaritma digunakan' />
      <A2 title='Kapan Logaritma digunakan' />

      <AA1 id='Konstanta' title='Konstanta' />
      <div>--------------------</div>

      <AA1 id='Variabel' title='Variabel' />

      <AA1 id='Rumus' title='Rumus' />
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        {LogaritmaRumus.map(a => (
          <article>
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
        {LogaritmaPenurunanRumus.map(a => (
          <article className='mb-3 overflow-x-auto' key={a.nama}>
            <PenurunanRumus title={a.nama}>
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
