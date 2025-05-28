import Text from "@repo/ui/elements/text";

const Result = () => {
	return (
		<div className="relative h-screen grid grid-rows-[52px_40px_1fr_60px]">
			<div className="grid justify-center content-center z-1">
				<Text size="text-[15px]" color="text-white-100" weight="font-medium">김태준</Text>
			</div>
			<div />
			<div className="grid justify-center content-center z-1">
				<div className="grid grid-cols-[660px_660px] gap-[80px]">
					<div>111</div>
					<div>111</div>
				</div>
			</div>
			<div />
			<div className="absolute bg-[url(/images/pc.jpg)] bg-no-repeat bg-center bg-cover -top-px -bottom-px -left-px -right-px z-0" />
		</div>
	)
}

export default Result