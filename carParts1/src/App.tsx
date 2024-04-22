import CatalogPage from "./CatalogPage";
import Layout from "./Layout";
import HeaderMain from "./mainPage";

import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HeaderMain />} />
				<Route path="catalog" element={<CatalogPage />} />
			</Route>
		</Routes>
	);
}

export default App;
