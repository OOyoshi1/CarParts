import React from "react";
import { NavLink } from "react-router-dom";

import { RegDialog } from "./registrationDialog";
import { AuthDialog } from "./authDialog";

export default function Header() {
	return (
		<div className="flex justify-start items-center">
			<div className="bg-[#F98C8C] p-3 w-[50%] ">
				<NavLink to="/catalog">
					<button className="bg-[#EFA7A7] hover:bg-[#eeb6b6] text-black py-2 px-7 rounded-[10px] ml-5 mr-14">
						Каталог
					</button>
				</NavLink>
				<NavLink to="/">
					<button className="bg-[#EFA7A7] hover:bg-[#eeb6b6] text-black py-2 px-7 rounded-[10px] mr-5">
						О нас
					</button>
				</NavLink>
			</div>
			<div className="bg-[#F98C8C] p-3 w-[50%] flex justify-end">
				<NavLink to="/">
					<img className="h-10 mr-4" src="./src/assets/images/cart.png" />
				</NavLink>

				<AuthDialog />
				<RegDialog />
			</div>
		</div>
	);
}
