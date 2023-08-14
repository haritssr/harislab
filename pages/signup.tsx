import Layout from "@/components/Layout";
import Link from "next/link";

export default function SignUp() {
  return (
    <Layout browserTitle="Login" description="Halaman SignUp">
      <form className="w-full p-5 mx-auto mt-16 space-y-4 bg-white rounded-lg shadow-md max-w-xs border border-zinc-300">
        <h1 className="text-2xl font-semibold text-center text-zinc-800">
          Daftar
        </h1>
        <section className="flex flex-col">
          <label className="text-sm" htmlFor="nama">
            Nama
          </label>
          <input
            className="px-2 py-1 border border-zinc-400 rounded focus:outline-none focus:border-zinc-800"
            type="text"
            id="nama"
            placeholder="Nama"
          />
        </section>

        <section className="flex flex-col">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="px-2 py-1 border border-zinc-400 rounded focus:outline-none focus:border-zinc-800"
            type="email"
            id="email"
            placeholder="Email"
          />
        </section>
        <div className="text-sm text-center text-zinc-500 ">
          Dengan mendaftar berarti kalian setuju dengan{" "}
          <Link href="/" className="text-blue-500">
            aturan
          </Link>{" "}
          dan{" "}
          <Link href="/" className="text-blue-500">
            privasi
          </Link>{" "}
          kami.
        </div>

        <button className="items-center w-full px-3 py-2 space-x-5 text-white duration-300 bg-zinc-800 border border-zinc-800 rounded-md hover:bg-white hover:text-zinc-800 focus:outline-none">
          Daftar
        </button>
      </form>
    </Layout>
  );
}
