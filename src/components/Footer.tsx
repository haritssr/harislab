import ScrollToTopButton from "./ScrollToTopButton";
import DownloadPWAButton from "./DownloadPWAButton";
import FooterLink from "./FooterLink";

export default function Footer() {
	return (
		<footer className="relative w-full mx-auto max-w-3xl mt-52">
			<div className="px-3 pb-3 pt-10 sm:px-0 space-y-3 sm:w-1/3">
				<ScrollToTopButton />
				<DownloadPWAButton />
				<FooterLink
					title="Aturan dan Privasi"
					href="/dokumentasi/aturan-dan-privasi"
				/>
				<FooterLink
					title="Ketentuan Layanan"
					href="dokumentasi/ketentuan-layanan"
				/>
				<FooterLink title="Peta Website" href="/peta-website" />
				<FooterLink title="Dokumentasi" href="/dokumentasi" />
				<FooterLink title="Harga" href="/harga" />
				<FooterLink title="Status Sistem" href="/status-sistem" />
				<div className="text-zinc-400">
					&copy; 2021–{new Date().getFullYear()} PT. Haris Laboratorium
					Indonesia
				</div>
			</div>
		</footer>
	);
}
