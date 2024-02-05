import { Route, Routes, BrowserRouter } from "react-router-dom";

import ChartPage from "@/pages/ChartPage";
import HomePage from "@/pages/HomePage";
import MyPage from "@/pages/MyPage";
import StarPage from "@/pages/StarPage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<HomePage />} />
				<Route path="/star" element={<StarPage />} />
				<Route path="/chart" element={<ChartPage />} />
				<Route path="/mypage" element={<MyPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
