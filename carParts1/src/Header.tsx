import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<div className="flex justify-start items-center">
			<div className="bg-[#F98C8C] p-3 w-[50%] ">
				<NavLink to="/">
					<button className="bg-[#EFA7A7] hover:bg-[#eeb6b6] text-black font-bold py-2 px-4 rounded-[10px] mr-4">
						Каталог
					</button>
				</NavLink>
				<NavLink to="/">
					<button className="bg-[#EFA7A7] hover:bg-[#eeb6b6] text-black font-bold py-2 px-4 rounded-[10px] mr-4">
						О нас
					</button>
				</NavLink>
			</div>
			<div className="bg-[#F98C8C] p-3 w-[50%] flex justify-end">
				<NavLink to="/">
					<button className="bg-blue-400 hover:bg-[#eeb6b6] text-black font-bold py-2 px-4 rounded-[10px] mr-4">
						Зарегистрироваться
					</button>
				</NavLink>
				<NavLink to="/">
					<button className="bg-blue-700 hover:bg-[#eeb6b6] text-black font-bold py-2 px-4 rounded-[10px] mr-4">
						Войти
					</button>
				</NavLink>
			</div>
		</div>
	);
}
