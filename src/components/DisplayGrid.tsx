import { Button } from "./Button";

type DisplayGridProps = {
	articles: {
		type: string;
		url: string;
		heading: string;
		ingress: string;
		buttonTxt: string;
	}[]
}

export function DisplayGrid({ articles }: DisplayGridProps) {
	console.log(articles)
	return (
		<div className="flex flex-col gap-8 md:grid-info max-w-[90rem]">
			{articles.map(({ type, url, heading, ingress, buttonTxt }, index) => (
				<div key={index} className={`${type} relative`}>
					<a href="#" className="hover:mix-blend-multiply hover:bg-kummelnas-text">
						<div
							className="h-full min-h-60"
						>
							<img src={url}
								alt="Omställning Kummelnäs"
								className="h-full object-cover"
							/>
							<div className="absolute top-14 px-6 w-full">

								{type === "article-main" && (
									<>
										<div className="absolute overflow-hidden ml-[-24px] z-0 w-full h-[180%] sm:h-[260%] top-[-56px] opacity-80 bg-gradient-to-b from-kummelnas-bg from-60% via-kummelnas-bg via-60% to-transparent to-100%"></div>
										<div className="relative z-10 lg:px-6">
											<h1 className="mb-2">{heading}</h1>
											<h2>{ingress}</h2>
										</div>
									</>
								)}

								{type === "article" && (
									<h1 className="lg:px-6">{heading}</h1>
								)}

							</div>
						</div>
					</a>
					<Button 
						className="absolute bottom-7 sm:bottom-[64px] left-[-14px]">{buttonTxt}</Button>
				</div>
			))}
		</div>
	)
}
