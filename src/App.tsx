import { useState } from 'react'
import './App.css'
import { Carousel } from './components/Carousel'
import { DisplayGrid } from './components/DisplayGrid'
import { Footer } from './components/Footer'
import { WelcomeSection } from './components/WelcomeSection'
import { PageHeader } from './layout/PageHeader'
import { PageHeaderMenu } from './components/PageHeaderMenu'

function App() {
	const [showMenu, setShowMenu] = useState(false)

	const slides = [
		{ header: "Alla är välkomna", ingress: "Alla behövs!", url: "https://premaloka.github.io/hosted-assets/kummelna%CC%88s-kapell.jpg", buttonTxt: "Om oss" },
		{ header: "Filmkväll i kapellet", ingress: "med soppa och musik", url: "https://premaloka.github.io/hosted-assets/movie-time.jpg", buttonTxt: "Nästa aktivitet" },
		{ header: "Höns på tomten", ingress: "hur börjar man?", url: "https://premaloka.github.io/hosted-assets/hens.jpg", buttonTxt: "Kunskapsbanken" },
		{ header: "Älgen", url: "https://premaloka.github.io/hosted-assets/moose3.mp4", buttonTxt: "Video", video: true },
		{ header: "någonting", url: "https://premaloka.github.io/hosted-assets/istockphoto-1379725446-640_adpp_is.mp4", buttonTxt: "Video", video: true },
		// "https://www.deanmcleodphotography.com/images/960/True-Blue-1600px-DMP-Website.jpg",
		// "https://static.vecteezy.com/system/resources/thumbnails/026/542/204/small_2x/landscape-natural-beautiful-mountains-and-blue-sky-panorama-photo.jpg",
		// "https://media.timeout.com/images/106041640/image.jpg"
	]

	const articles = [
		{ type: "article-main", url: "https://premaloka.github.io/hosted-assets/movie-time.jpg", heading: "Filmkväll i kapellet", ingress: "med soppa och musik", buttonTxt: "Nästa aktivitet" },
		{ type: "article", url: "https://premaloka.github.io/hosted-assets/hens.jpg", heading: "Höns på tomten", ingress: "Förbättra för dina kära höns", buttonTxt: "Kunskapsbanken" },
		{ type: "article", url: "https://premaloka.github.io/hosted-assets/soil.jpg", heading: "Jordförbättring", ingress: "", buttonTxt: "Fr. Kummelnäs" },
	]
	console.log("showmenu App", showMenu)

	return (
		<>
			<div className={`font-serif flex flex-col h-screen max-h-screen bg-white`}>
				{/* {showMenu && */}
				<PageHeaderMenu showMenu={showMenu} setShowMenu={setShowMenu} />
				{/* } */}
				<PageHeader showMenu={showMenu} setShowMenu={setShowMenu} />
				<div className={`${showMenu ? "overflow-hidden" : "overflow-auto"} `}>
					<div className="w-[100%]">
						<Carousel slides={slides} />
					</div>
					<div className="flex justify-center bg-kummelnas-bg-light px-10 py-10 md:px-16 md:py-[4.5rem]">
						<DisplayGrid articles={articles} />
					</div>
					<div className="px-10 py-12 md:px-16 md:py-0 ">
						<WelcomeSection />
					</div>
					<div className='bg-kummelnas-bg px-4 py-12 md:px-16 md:py-16'>
						<Footer />
					</div>
				</div>
			</div>
		</>
	)
}

export default App
