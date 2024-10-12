import { useEffect, useState } from "react";
// import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { Button } from "./Button";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

interface CarouselProps {
	// slides: string[];
	slides: {
		header: string,
		ingress?: string,
		url: string,
		buttonTxt: string,
		video?: boolean
	}[]
}

export function Carousel({ slides }: CarouselProps) {
	const [current, setCurrent] = useState(0);
	const [isLeftVisible, setIsLeftVisible] = useState(false);
	const [isRightVisible, setIsRightVisible] = useState(true);

	useEffect(() => {
		if (current > 0) setIsLeftVisible(true);
		if (current < slides.length - 1) setIsRightVisible(true);
		if (current === slides.length - 1) setIsRightVisible(false);
		if (current === 0) setIsLeftVisible(false);
	}, [current, slides]);

	const nextSlide = () => {
		if (current < slides.length - 1) {
			setCurrent(current + 1);
		}
	};

	const previousSlide = () => {
		if (current > 0) {
			setCurrent(current - 1);
		}
	};

	return (
		<>
			<div className="overflow-hidden relative">

				{/* Left & Right arrows */}
				<div className="absolute top-20 h-full w-full flex justify-between items-center text-kummelnas-bg px-10 text-3xl">
					<button type="button" title="Arrow left" onClick={previousSlide}
						className={`z-30 ${isLeftVisible ? "opacity-80" : "opacity-30  cursor-default"} slide-arrow`}
					>
						{/* <FaCircleArrowLeft />  */}
						<MdKeyboardDoubleArrowLeft />
					</button>
					<button type="button" title="Arrow right" onClick={nextSlide}
						className={`z-30 ${isRightVisible ? "opacity-80" : "opacity-30 cursor-default"} slide-arrow`}
					>
						{/* <FaCircleArrowRight /> */}
						<MdKeyboardDoubleArrowRight />
					</button>
				</div>

				{/* slide index dots  */}
				<div className="absolute z-30 bottom-0 w-full flex justify-center mb-8 gap-2">
					{slides.map((_slide, index) => (
						<button key={index} title="Carousel Slide" type="button" onClick={() => setCurrent(index)}>
							<div className={`${current === index ? "" : "opacity-40"} bg-kummelnas-bg rounded-full w-3 h-3`}>
							</div>
						</button>
					))}
				</div>

				{/* slide image or video  */}
				<div className="flex transition-transform ease-out duration-500"
					style={{ transform: `translateX(-${current * 100}%)` }}>
					{slides.map(({ header, ingress, url, buttonTxt, video }, index) => (
						<div key={index} 
						className={`min-w-full h-[70svh] max-h-[40rem] ${video ? "bg-[#453923]" : "bg-kummelnas opacity-95"} relative`}>
							{video ?
								<video
									autoPlay loop muted
									src={url}
									title={`Slide ${index}`}
									className="w-full object-cover h-full mix-blend-screen opacity-[80%]"
								/> :
								<img
									src={url}
									alt={`Slide ${index}`}
									className="w-full object-cover h-full mix-blend-hard-light opacity-20"
								/>
							}

							{/* slide text content  */}
							<div className="absolute text-center text-kummelnas-bg top-0 w-full h-full flex flex-col items-center justify-center py-14 px-24">
								{ingress ?
									<>
										<h1 className="slide-header md:text-6xl relative text-kummelnas-bg z-10 text-balance">{header}</h1>
										<h2 className="md:text-4xl z-10">{ingress}</h2>
										<Button
											title="Aktivitet"
											type="button"
											onClick={previousSlide}
											size="large"
											className="z-20 md:py-2"
										>
											{buttonTxt}
										</Button>
									</>
									:
									<>
										<h1 className="slide-header md:text-6xl relative mt-[-20px] mb-72 text-kummelnas-bg z-10 text-balance">{header}</h1>
									</>
								}
							</div>
						</div>
					))}
				</div>

			</div>
		</>
	);
}
