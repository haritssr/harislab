import LayoutGlobalNavigation from "@/components/LayoutGlobalNavigation";
import Image from "next/image";
import { useState } from "react";

export default function Profil() {
  const [logged, setLogged] = useState(true);

  return (
    <LayoutGlobalNavigation
      globalNavigationTitle="Profil"
      browserTitle="Profil"
      description="Profil"
    >
      <div className="mx-auto max-w-sm space-y-5">
        <section className="">
          <div className="text-xl font-bold">Data Diri</div>
          <div className="bg-zinc-200 rounded-md p-4 w-fit space-x-2 flex items-center">
            <Image
              src="/haris.jpg"
              blurDataURL="/haris.jpg"
              className="rounded-full"
              width={100}
              height={100}
              alt=""
            />
            <input
              type="file"
              name="Pilih foto"
              id=""
              className="file:mr-4 file:py-1 file:px-3
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-zinc-700
        hover:file:bg-violet-100"
            />
          </div>
          <div className="flex items-center space-x-2">
            <div className="font-medium">Name :</div>
            <div className="">Harits Syah Rahmatullah</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="font-medium">Email :</div>
            <div className="">haritssr@gmail.com</div>
          </div>
        </section>
        <section className="mx-auto max-w-sm">
          <div className="text-xl font-bold">Pengaturan</div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="navigation-bar" />
            <label htmlFor="navigation-bar">Pengaturan 1</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="navigation-bar" />
            <label htmlFor="navigation-bar">Pengaturan 2</label>
          </div>
        </section>
        <section className="mx-auto max-w-sm">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Statistik</div>
            <button
              onClick={() => setLogged(!logged)}
              className={`${logged ? "text-red-500" : "text-blue-500"}`}
            >
              {logged ? "Logout" : "Login"}
            </button>
          </div>
          {logged ? (
            <>
              <div className="font-medium text-zinc-700">
                Bab yang sudah selesai dibaca
              </div>
              <div className="h-32 bg-zinc-200 rounded mb-3 flex items-center justify-center text-zinc-500">
                Grafik
              </div>
              <div className="font-medium text-zinc-700">
                Topik yang sudah selesai dibaca
              </div>
              <div className="h-32 bg-zinc-200 rounded mb-3 flex items-center justify-center text-zinc-500">
                Grafik
              </div>
              <div className="font-medium text-zinc-700">
                Topik yang sedang dibaca
              </div>
              <div className="h-32 bg-zinc-200 rounded mb-3 flex items-center justify-center text-zinc-500 p-4">
                Daftar link menuju topik yang sedang dibaca, tepat pada bagian
                paragraph yang sedang dibaca
              </div>
              <div className="font-medium text-zinc-700">Nilai Latihan</div>
              <div className="h-32 bg-zinc-200 rounded mb-3 flex items-center justify-center text-zinc-500">
                Grafik
              </div>
              <div className="font-medium text-zinc-700">Nilai Ujian</div>
              <div className="h-32 bg-zinc-200 rounded mb-3 flex items-center justify-center text-zinc-500">
                Grafik
              </div>
              <div className="font-medium text-zinc-700">Histori Bimbel</div>
              <div className="h-32 bg-zinc-200 rounded mb-3 flex items-center justify-center text-zinc-500">
                Grafik dan list bimbel
              </div>
            </>
          ) : (
            <div className="">Mohon login untuk melihat statistik</div>
          )}
        </section>
      </div>
    </LayoutGlobalNavigation>
  );
}
