import SecondNav from "@/components/SecondNav";
import React from "react";

export default function OrderPage() {
	async function handleOrder() {
		"use server";
		return null;
	}

	async function handleCariGuru() {
		"use server";
		return null;
	}

	const label = "flex items-center justify-between py-2.5";
	const button =
		"bg-zinc-700 rounded-md text-white px-2.5 py-1 hover:bg-zinc-800";

	return (
		<>
			<SecondNav backTo="/bimbel" backTitle="Bimbel" title="Pesan Bimbel" />
			<section className="mt-10">
				<form
					action={handleOrder}
					className="divide-y divide-zinc-200 border border-zinc-200 rounded-md px-3"
				>
					<label className={label}>
						<span className="font-medium">Nama :</span>
						<input
							className="border border-zinc-300 outline-none px-2 py-1 rounded-md focus:ring-2 focus:ring-zinc-700"
							type="text"
							placeholder="Masukkan nama"
						/>
					</label>

					<label className={label}>
						<span className="font-medium">Lokasi :</span>
						<input
							className="border border-zinc-300 outline-none px-2 py-1 rounded-md focus:ring-2 focus:ring-zinc-700"
							type="text"
							placeholder="Masukkan lokasi"
						/>
					</label>

					<label className={label}>
						<span className="font-medium">Pelajaran :</span>
						<select name="Pelajaran" id="Pelajaran">
							<option value="matematika">Matematika</option>
							<option value="fisika">Fisika</option>
						</select>
					</label>

					<label htmlFor="Bab" className={label}>
						<span className="font-medium">Bab :</span>
						<select name="Bab" id="Bab">
							<option value="Bangun Datar">Bangun Datar</option>
							<option value="Bangun Ruang">Bangun Ruang</option>
						</select>
					</label>

					<label className={label}>
						<span className="font-medium">Perulangan :</span>
						<select name="Type" id="Type">
							<option value="Satu Kali">Satu Kali</option>
							<option value="Berulang">Berulang</option>
						</select>
					</label>

					<div>
						<div className="flex items-center justify-between pt-2.5">
							<label>Guru</label>
							<button className={button} onClick={handleCariGuru} type="button">
								Cari Guru
							</button>
						</div>
						<div className="flex justify-end text-sm text-zinc-400 pt-1.5 pb-2.5">
							Guru akan dicarikan dalam radius 7 km dari lokasi yang anda
							cantumkan di profil.
						</div>
					</div>
				</form>
			</section>
		</>
	);
}
