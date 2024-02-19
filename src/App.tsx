import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChartPage from "@/pages/ChartPage";
import HomePage from "@/pages/HomePage";
import MyInfoPage from "@/pages/MyInfoPage";
import MyPage from "@/pages/MyPage";
import MyStarTracePage from "@/pages/MyStarTracePage";
import OauthSignUp from "@/pages/SignUp/OauthSignUp";
import SignUp from "@/pages/SignUp/SignUp";
import StarCardDetailPage from "@/pages/StarCardDetailPage";
import StarPage from "@/pages/StarPage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<HomePage />} />
				<Route path="/star" element={<StarPage />} />
				<Route path="/chart" element={<ChartPage />} />
				<Route path="/mypage" element={<MyPage />} />
				<Route path="/myinfo" element={<MyInfoPage />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/oauthsignup" element={<OauthSignUp />} />
				<Route path="/star/:id" element={<StarCardDetailPage />} />
				<Route path="/star-trace" element={<MyStarTracePage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
