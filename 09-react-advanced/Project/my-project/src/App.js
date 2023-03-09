
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import {
	PageChangerColorProvider
} from "./Components/Layout/PageChangerColor/PageChangerColor.context";
import { PageDetailsCountries } from "./Pages/PageDetailsCountries/PageDetailsCountries";
import { PageListCountries } from "./Pages/PageListCountries/PageListCountries";

function App() {
	
	return (
		<PageChangerColorProvider >
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/" element={<PageListCountries />} />
						<Route
							path="/:countryName"
							element={<PageDetailsCountries />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</PageChangerColorProvider>
	);
}

export default App;
