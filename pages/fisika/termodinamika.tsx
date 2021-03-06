import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import TermodinamikaImage from '../../public/Fisika/TermodinamikaImage.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import LayoutMateri from '@/components/LayoutMateri';
import { TermodinamikaVar } from 'data/VariabelFisika';
import { TermodinamikaRumus } from 'data/RumusFisika';
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
  TopicMateri,
  SubTopic,
} from '@/components/DesignSystem';

export default function Termodinamika() {
  return (
    <LayoutMateri browserTitle='Termodinamika' description='Materi Termodinamika'>
      <main className='grid grid-cols-1 md:gap-5 md:grid-cols-5'>
        <div className='md:col-span-1'>
          <List branch='fisika' to='Termodinamika' title='Termodinamika'>
            <NavList title='Pengenalan' href='Pengenalan' />
            <NavList title='Konstanta' href='Konstanta' />
            <NavList title='Variabel' href='Variabel' />
            <NavList title='Rumus' href='Rumus' />
            <NavList title='Penurunan Rumus' href='PenurunanRumus' />
            <NavList title='Pembahasan' href='Pembahasan' />
            <NavList title='Contoh Soal' href='ContohSoal' />
          </List>
        </div>

        <section className='md:col-span-4'>
          <TopicMateri name='Pengenalan' id='Pengenalan' />
          <SubTopic name='Apa itu Termodinamika' />
          <P>
            <em>Termo</em> = Panas. <em>Dinamika</em> = bergerak. Termodinamika adalah ilmu yang
            mempelajari panas yang bergerak. Panas adalah suhu, suhu memiliki energi, suhu yang
            bergerak dinamakan kalor. Semua hal di dunia ini memiliki panas, bahkan suhu{' '}
            <TeX>-10\degree</TeX>
            yang biasa manusia rasakan sebagai sesuatu yang dingin pada dasarnya adalah panas,
            bahkan dalam fisika sebenarnya tidak ada yang namanya dingin, suhu badan manusia
            rata-rata adalah
            <TeX>30\degree s.d \ 37\degree</TeX>, itu untuk suhu badan yang sehat, suhu badan di
            bawah itu maka tubuh akan merasakannya sebagai dingin, dan suhu di atas itu akan
            dianggap sebagai sesuatu yang panas.
          </P>
          <P>
            Namun bagi hewan lain yang tinggal di bawah laut yang suhunya bisa mencapai
            <TeX>0\degree</TeX> mereka nyaman dengan suhu tersebut, sehingga persepsi dingin yang
            manusia rasakan pada suhu itu tidak mereka anggap sebagai sesuatu yang dingin bagi
            mereka, melainkan suhu normal. <KaTeX>{`P_h = \\rho g h = \\frac{A}{B}`}</KaTeX>
          </P>
          <SubTopic name='Siapa yang menggunakan Termodinamika' />
          <P>
            Pada dasarnya dunia ini ada karena panas matahari, panas matahati adalah objek dari ilmu
            termodinamika juga. Semua hal di dunia ini yang bergerak baik secara mikroskopik maupun
            makroskopik memiliki properti termodinamika.
          </P>
          <P>
            Pekerjaan yang mengandung ilmu termodinamika secara khusus biasanya terknik perminyakan,
            pemadam kebakaran, koki, dan apapun yang berhubungan dengan api. Namun secara umum,
            karena definisi termodinamika adalah sebuah panas yang bergerak, maka semua yang ada di
            dunia ini adalah objek termodinamika, bahkan kuli bangunan yang sedang mengaduk semen
            juga sedang melakukan ilmu termodinamika, panas tubuh yang mereka hasilkan setelah
            mengankat semen lalu jika kita mendekatinya maka panas tubuh mereka kan terasa pada
            tubuh kita karena ada hukum di termodinamika bahwa benda yang suhunya lebih tinggi,
            suhunya akan pindah ke benda yang suhunya lebih rendah.
          </P>
          <SubTopic name='Dimana Termodinamika digunakan' />
          <P>Semua hal di dunia menggunakan prinsip termodinamika.</P>
          <SubTopic name='Kapan Termodinamika digunakan' />
          <P>Selama matahari masih menyinari bumi.</P>
          <TopicMateri name='Konstanta' id='Konstanta' />
          <section className='overflow-x-auto '>
            <table className='w-full min-w-full border table-max'>
              <THEAD>
                <Row>
                  <TH>Simbol</TH>
                  <TH>Nama</TH>
                  <TH>Nilai</TH>
                </Row>
              </THEAD>
              <Body>
                <Row>
                  <TData>
                    <TeX>\sigma</TeX>
                  </TData>
                  <TData>Konstanta Steffan Boltzmann</TData>
                  <TData>
                    <KaTeX>{`1,380 \\times 10^{-23} \\dfrac{J}{K}`}</KaTeX>
                  </TData>
                </Row>
                <Row>
                  <TData>
                    <TeX>R</TeX>
                  </TData>
                  <TData>Konstanta Gas Ideal</TData>
                  <TData>
                    <KaTeX>{`8,3145 \\enspace \\dfrac{J\\cdot mol}{K}`}</KaTeX>
                  </TData>
                </Row>
              </Body>
            </table>
          </section>
          <TopicMateri name='Variabel' id='Variabel' />
          <section className='overflow-x-auto'>
            <table className='w-full min-w-full border table-max'>
              <THEAD>
                <Row>
                  <TH>Simbol</TH>
                  <TH>Nama</TH>
                  <TH>Satuan</TH>
                </Row>
              </THEAD>
              <Body>
                {TermodinamikaVar.map(a => (
                  <Row key={a.simbol}>
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
          <TopicMateri name='Rumus' id='Rumus' />
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            {TermodinamikaRumus.map(a => (
              <article key={a.nama}>
                <div className={rumusTitle}>{a.nama}</div>
                {typeof a.rumus === 'string' ? (
                  <KaTeX>{String.raw`${a.rumus}`}</KaTeX>
                ) : (
                  a.rumus.map(b => <KaTeX>{String.raw`${b.rumus}`}</KaTeX>)
                )}
              </article>
            ))}
          </div>
          <TopicMateri name='PenurunanRumus' id='Penurunan Rumus' />
          <P>
            Math Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero enim provident
            tenetur? Earum voluptas, rerum aliquid corporis, sit veritatis laborum aut eum sed saepe
            natus esse quas expedita animi! Quasi odio architecto impedit voluptatum eligendi nihil
            placeat molestiae at vitae consequatur, autem, eos hic nemo debitis recusandae deleniti
            asperiores? Officia quam eaque excepturi facere, eligendi perferendis iste. Accusantium
            nam dolor doloremque unde expedita sunt cumque blanditiis, corrupti, in sit ipsum qui
            laboriosam hic quidem, odio ad. In officia, pariatur exercitationem provident deserunt
            neque excepturi nisi voluptates saepe quidem commodi esse, atque odio incidunt
            voluptatum porro ipsum reiciendis iusto nosTRowwwwwum laboriosam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Laborum quibusdam ipsa nosTRowwwwwum facilis qui nisi
            ratione molestias, sequi dolores nihil sint corporis tenetur nam illum accusantium
            reprehenderit eos! Eligendi illo iste, at obcaecati quaerat corporis qui iusto eveniet
            soluta unde sunt rem? Corrupti, quidem! Aspernatur perspiciatis quibusdam iure laborum
            perferendis eligendi quas dolor quia, sit expedita modi quis nam aliquid deserunt amet
            soluta cumque at eaque dolores dolore corporis libero provident consectetur quidem.
            Repudiandae sed debitis omnis corrupti possimus in sit magni labore, sapiente repellat
            nam libero explicabo aspernatur rerum facere, incidunt eligendi consequatur magnam
            inventore voluptatem illo. Nihil, asperiores!
          </P>
          <TopicMateri name='Pembahasan' id='Pembahasan' />
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laborum dignissimos odit
            nesciunt eligendi voluptate placeat praesentium ab dolor. Aspernatur, maiores sit
            accusantium neque nobis quibusdam odit similique debitis pariatur illum voluptatem
            repellendus, adipisci ab accusamus eos quidem rem id autem fugiat ad iusto quia dolor?
            Omnis eveniet iusto aspernatur fugiat, quas ex laborum voluptatum officiis rerum cumque
            placeat tempora voluptates! Cum nulla magnam quia ab. Minima nemo quae, hic
            exercitationem accusantium iure voluptas sequi omnis culpa in non incidunt recusandae
            optio rerum fugit totam eligendi inventore est ab repudiandae? Soluta, obcaecati ducimus
            corrupti vel quod quasi totam ipsum debitis?
          </P>
          <TopicMateri name='ContohSoal' id='Contoh-Soal' />
          <P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero enim provident tenetur?
            Earum voluptas, rerum aliquid corporis, sit
          </P>
          <br />
          <ExampleMain type='Contoh Soal Mudah'>
            <ExampleChild type='Teori Kinetik Gas'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, nemo.
            </ExampleChild>
          </ExampleMain>
        </section>
      </main>
    </LayoutMateri>
  );
}
