
export function WelcomeSection() {

	return (
		<div className="flex flex-col sm:flex-row w-full gap-8 px-4 md:px-0 items-center justify-center md:max-w-[90rem] m-auto">
			{/* sm:max-h-36 md:h-[16rem] lg:h-[20rem] overflow-hidden" */}
			<div className="flex basis-1/2 bg-[#E6DFD4] overflow-hidden rounded-[168px] md:rounded-none aspect-[4/3] md:aspect-auto max-h-60 md:h-auto md:min-h-80">
				<img
					src={"https://premaloka.github.io/hosted-assets/kummelna%CC%88s-kapell.jpg"}
					alt=""
					className="w-full flex-grow overflow-hidden object-cover mix-blend-color-burn"
				/>
			</div>
			<div className="basis-1/2 text-center sm:text-left md:px-10">
				<h3>Alla är välkomna!</h3>
				<p>Kom och dela idéer eller nätverka för ett levande Kummelnäs. </p>
			</div>

		</div>
	)

}