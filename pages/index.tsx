import Link from 'next/link';
import FAQ from '../components/FAQ';
import InfoBox from '../components/InfoBox';
import Layout from '../components/Layout';
import Support from '@/components/Support';
import {
  SayaPeduliTentang,
  CaraSayaMenyampaikanInformasi,
  isiFAQ,
  WhatWhatYouCanDo,
} from '../data/Beranda';
import InfoBoxFitur from '@/components/InfoBoxFitur';
import CTABanner from '@/components/CTABanner';

export default function Beranda() {
  const BerandaTitle = 'mb-7 text-lg sm:text-3xl font-bold text-center text-zinc-700 space-y-2 ';
  const subBerandaTitle = 'text-base sm:text-xl font-normal text-zinc-500';
  const wrapper = 'mt-20 mb-32 sm:mb-40';
  const sectionBox =
    'grid grid-cols-1 gap-5 mx-auto xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 xs:px-0';
  const tr = 'border-b border-zinc-600 divide-x divide-zinc-600';
  const td = ' text-left text-sm p-2';
  const th = 'p-2 text-left text-base font-medium text-zinc-800 bg-zinc-200';

  return (
    <Layout browserTitle='Beranda' description='Laboratorium untuk Pelajar.'>
      <section className='flex flex-col items-center py-16 xs:py-24 text-left sm:w-2/3 mx-auto space-y-4'>
        <div className='text-5xl text-zinc-800 font-semibold text-center'>
          Belajar matematika fisika online dan pesan bimbel
        </div>
        <div className='sm:text-lg text-zinc-600 text-center w-full'>
          Dilengkapi dengan fitur kalkulator, rumus, contoh soal, latihan soal, kontrol animasi, dan
          laporan pembelajaran.
        </div>

        {/* LINK KE BELAJAR DAN PESAN BIMBEL */}
        <div className='flex items-center justify-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5  w-full '>
          <Link
            href='/matematika'
            className='text-lg rounded-md px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white p-1 w-full sm:w-1/3 text-center transform duration-200 hover:from-blue-500 hover:to-blue-600 '
          >
            Mulai Belajar
          </Link>
          <Link
            href='/bimbel'
            className='text-lg rounded-md px-3 py-1.5 shadow hover:shadow-none border border-zinc-300 hover:bg-zinc-50 w-full sm:w-1/3 text-center text-blue-500'
          >
            Pesan Bimbel
          </Link>
        </div>
      </section>

      {/* Fitur */}
      <section id='fitur' className={wrapper}>
        <div className={BerandaTitle}>
          <div>
            Yang bisa kalian lakukan di <span className='text-zinc-700'>Haris Lab</span>
          </div>
          <div className={subBerandaTitle}>Kalkulator, Matematika, Fisika, Bimbel</div>
        </div>

        <section className={sectionBox}>
          {WhatWhatYouCanDo.map(a => (
            <InfoBoxFitur
              key={a.title}
              svg={a.svg}
              to={a.to}
              name={a.title}
              description={a.desc}
              ResultOfTheAction={a.ResultOfTheAction}
              // fitur={a.fiturs.map(b => (
              // <FiturBox key={b.fitur} fitur={b.fitur} />
              // ))}
            />
          ))}
        </section>
      </section>

      {/* Cara kami menyajikan informasi */}
      <section className={wrapper}>
        <div className={BerandaTitle}>
          <div>Cara kami menyajikan informasi</div>
          <div className={subBerandaTitle}>Agar informasi yang tersedia mudah dipahami.</div>
        </div>
        <section className={sectionBox}>
          {CaraSayaMenyampaikanInformasi.map(a => (
            <InfoBox key={a.id} svg={a.svg} name={a.title} description={a.description} />
          ))}
        </section>
      </section>

      {/* Kami peduli tentang */}
      <section className={wrapper}>
        <div className={BerandaTitle}>
          <div>Kami peduli tentang</div>
          <div className={subBerandaTitle}>
            Hubungan arsitektur informasi dan kemampuan pelajar belajar.
          </div>
        </div>

        <section className={sectionBox}>
          {SayaPeduliTentang.map(a => (
            <InfoBox key={a.id} svg={a.svg} name={a.title} description={a.description} />
          ))}
        </section>
      </section>

      {/* HarisLab vs Zenius vs Ruangguru vs Buku Paket*/}
      <section className={wrapper}>
        <div className={BerandaTitle}>
          <div>Perbandingan</div>
          <div className={subBerandaTitle}>HarisLab vs Zenius vs Ruangguru vs Wikipedia</div>
        </div>
        <section className='mx-auto overflow-x-auto sm:gap-5 lg:px-0'>
          <table className='w-full overflow-hidden border border-zinc-600'>
            <thead>
              <tr className={tr}>
                <th className={th}>vs</th>
                <th className={th}>HarisLab</th>
                <th className={th}>Zenius</th>
                <th className={th}>Ruangguru</th>
                <th className={th}>Pahamify</th>
                <th className={th}>Wikipedia</th>
                <th className={th}>Buku Paket</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-cyan-500'>
              <tr className={tr}>
                <td className={td}>Harga</td>
                <td className={td}>25rb/bln</td>
                <td className={td}>50rb/bln</td>
                <td className={td}>80rb/bln</td>
                <td className={td}>200rb/bln</td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
              </tr>
              <tr className={tr}>
                <td className={td}>Update Informasi</td>
                <td className={td}>Selalu Update</td>
                <td className={td}>Selalu Update</td>
                <td className={td}>Selalu Update</td>
                <td className={td}>Tidak Update</td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
              </tr>
              <tr className={tr}>
                <td className={td}>Durabilitas</td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
                <td className={td}>Mudah rusak</td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
              </tr>
              <tr className={tr}>
                <td className={td}>Mobilitas</td>
                <td className={td}>Mudah dibawa</td>
                <td className={td}>Mudah dibawa</td>
                <td className={td}>Mudah dibawa</td>
                <td className={td}>Sulit dibawa </td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>

      <Support />

      {/* FAQ */}
      <section className={wrapper}>
        <div className={BerandaTitle}>
          <div>Frequently asked questions</div>
          <div className={subBerandaTitle}>Pertanyaan-pertanyaan yang sering ditanyakan.</div>
        </div>
        <section className='grid grid-cols-1 gap-3 max-w-xl mx-auto'>
          {isiFAQ.map(a => (
            <FAQ key={a.id} button={a.button} panel={a.panel} />
          ))}
        </section>
      </section>

      <CTABanner
        title='Coba Haris Lab sekarang'
        description='Mulai gratis dan gunakan fitur lanjutan ketika ketika level pelajaranmu meningkat.'
        CTA='Mulai belajar sekarang'
      />
    </Layout>
  );
}
