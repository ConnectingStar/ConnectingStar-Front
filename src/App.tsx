import { Route, Routes, BrowserRouter } from "react-router-dom";

import ChatPage from "./pages/ChatPage";

import ChartPage from "@/pages/ChartPage";
import HomePage from "@/pages/HomePage";
import MyPage from "@/pages/MyPage";
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
				<Route path="/signup" element={<SignUp />} />
				<Route path="/oauthsignup" element={<OauthSignUp />} />
				<Route path="/star/:id" element={<StarCardDetailPage />} />
				<Route path="/chat" element={<ChatPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
