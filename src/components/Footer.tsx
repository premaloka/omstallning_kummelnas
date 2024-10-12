import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Button } from "./Button";

export function Footer() {
	return (
		<footer className="footer relative flex flex-col sm:flex-row w-full gap-8 px-4 md:px-0 justify-center md:max-w-[90rem] m-auto min-h-10">
			<section className="border border-kummelnas-border px-6 sm:px-8 lg:px-14 pt-10 sm:pt-[72px] md:pt-[60px] pb-8 basis-1/2 align-top">
				<h3 className="text-2xl sm:text-[1.75rem]">Inspiration</h3>
				<div className="w-full border-t border-kummelnas-border pl-2 pt-5">
					<ul>
						<li><a href="">Från Kummelnäs</a></li>
						<li><a href="">Berättelser från events</a></li>
						<li><a href="">Idéer om framtiden</a></li>
						<li><a href="">Kunskapsbanken</a></li>
					</ul>
				</div>
			</section>
			<section className="border border-kummelnas-border px-6 sm:px-8 lg:px-14 pt-10 md:pt-[60px] pb-4 md:pb-8 basis-1/2">
				<h3 className="text-2xl sm:text-[1.75rem]">Omställning Kummelnäs</h3>
				<div className="w-full border-t border-kummelnas-border pl-2 pt-5">
					<ul>
						<li><a href="">Aktiviteter</a></li>
						<li><a href="">Om oss</a></li>
						<li><a href="">Kontakt</a></li>
					</ul>
				</div>
				<div className="flex mb-5">
					<Button
						variant="transparent"
						size="icon"
						className="socials text-kummelnas-text"
					>
						<FaFacebook className="w-6 h-6" />
					</Button>
					<Button
						variant="transparent"
						size="icon"
						className="socials text-kummelnas-text"
					>
						<FaInstagram className="w-6 h-6" />
					</Button>
				</div>
			</section>
		</footer>
	)
}