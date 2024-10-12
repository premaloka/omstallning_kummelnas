import { FaFacebook, FaInstagram } from "react-icons/fa"
import { Button } from "./Button"
import { FaX } from "react-icons/fa6"

type PageHeaderMenuProps = {
	showMenu?: boolean,
	setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const PageHeaderMenu: React.FC<PageHeaderMenuProps> = ({ showMenu, setShowMenu }) => {
	return (
		<div
			className={`menu flex flex-col absolute top-0 left-0 z-50 w-full px-8 sm:w-[63svw] md:w-[44svw] lg:w-[33svw] py-6 h-svh bg-kummelnas-bg-light ${showMenu ? "translate-x-0" : "-translate-x-full" } transition ease-in-out duration-500 flex flex-col`}>
			<Button
				variant="transparent"
				size="icon"
				className="w-12 h-12 text-kummelnas self-end active:animate-ping"
				onClick={() => setShowMenu(!showMenu)}
			>
				<FaX className="w-8 h-8" />
			</Button>
			<section className="pt-4 sm:pt-10 md:pt-[60px] pb-4 md:pb-8 ">

				<h3>Omställning Kummelnäs</h3>
				<div className="w-full pl-2 pt-5">
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
			<section className="pt-2 pb-4 md:pb-8 ">
				<h3>Inspiration</h3>
				<div className="w-full pl-2 pt-5">
					<ul>
						<li><a href="">Från Kummelnäs</a></li>
						<li><a href="">Berättelser från events</a></li>
						<li><a href="">Idéer om framtiden</a></li>
						<li><a href="">Kunskapsbanken</a></li>
					</ul>
				</div>
			</section>
		</div >
	)
}