import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { type CarouselApi } from "@/components/ui/carousel";
import React from "react";

export default function HeaderMain() {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);
	return (
		<div className="">
			<div className="flex justify-center mt-10 mb-10">
				<Carousel setApi={setApi}>
					<CarouselContent>
						<CarouselItem className="flex object-fill h-80 w-44">
							<img className="" src="./src/assets/images/MSI.png" />
						</CarouselItem>
						<CarouselItem className="flex object-fill h-80 w-44">
							<img className="" src="./src/assets/images/MSI.png" />
						</CarouselItem>
						<CarouselItem className="flex object-fill h-80 w-44">
							<img className="" src="./src/assets/images/MSI.png" />
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
			<div className="flex w-full max-w-sm items-center space-x-2">
				<Input placeholder="Найти деталь по Vin номеру" />
				<Button className="bg-[#EFA7A7] hover:bg-[#eeb6b6] text-black font-bold">
					Найти
				</Button>
			</div>
		</div>
	);
}
