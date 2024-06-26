import React from "react";
import { NavLink } from "react-router-dom";
import { Checkbox } from "./components/ui/checkbox";
import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useState, useEffect } from "react";

export default function CatalogPage() {
	const [merchants, setParts] = useState(false);
	const [vin, setVin] = useState();
	function getParts() {
		fetch("http://localhost:3001", {
			method: "POST",
			body: JSON.stringify(vin),
		})
			.then((response) => {
				return response.text();
			})
			.then((data) => {
				setParts(data);
			});
	}

	useEffect(() => {
		getParts();
	}, []);
	return (
		<div className="h-screen w-screen">
			<div className="grid grid-cols-3 h-[70%] gap-5 ">
				<div className="flex justify-center items-center ">
					<div>
						<div>
							<Checkbox />
							<label
								htmlFor="terms2"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								Оригинальные запчасти
							</label>
						</div>

						<div>
							<Checkbox />
							<label
								htmlFor="terms2"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								Запчасти аналоги
							</label>
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center mt-10">
					<Separator orientation="vertical" className="bg-black " />
				</div>
				<div className="flex items-center  ">
					<div className="p-4">
						<ul>
							<li>Abarth</li>
							<li>Alfa Romeo</li>
							<li>Audi</li>
							<li>BMW</li>
							<li>BYD</li>
							<li>Chery</li>
							<li>Chevrolet</li>
							<li>Chrysler</li>
							<li>Citroen</li>
							<li>Dacia</li>
							<li>Daewoo</li>
							<li>Derways</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>Abarth</li>
							<li>Alfa Romeo</li>
							<li>Audi</li>
							<li>BMW</li>
							<li>BYD</li>
							<li>Chery</li>
							<li>Chevrolet</li>
							<li>Chrysler</li>
							<li>Citroen</li>
							<li>Dacia</li>
							<li>Daewoo</li>
							<li>Derways</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="flex w-full max-w-sm items-center space-x-2 ml-20">
				<Input
					value={vin}
					onChange={(e) => setVin(e.target.value)}
					placeholder="Найти деталь по Vin номеру"
					id="findPart"
				/>
				<Button
					className="bg-[#EFA7A7] hover:bg-[#eeb6b6] text-black font-bold"
					onClick={getParts()}
				>
					Найти
				</Button>
				{merchants ? merchants : "There is no merchant data available"}
			</div>
		</div>
	);
}
