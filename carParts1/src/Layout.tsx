import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
	return (
		<div className="bg-[#FAE4E4] flex flex-col h-screen">
			<header className="">
				<Header />
			</header>

			<Outlet />

			<footer className="w-full row-auto">пока</footer>
		</div>
	);
}
