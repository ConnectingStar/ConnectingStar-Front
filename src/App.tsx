import { Route, Routes, BrowserRouter } from "react-router-dom";

import ChartPage from "@/pages/ChartPage";
import HomePage from "@/pages/HomePage";
import MyPage from "@/pages/MyPage";
import OauthSignUp from "@/pages/SignUp/OauthSignUp";
import SignUp from "@/pages/SignUp/SignUp";
import StarPage from "@/pages/StarPage";

import CreateAccountPage from "./pages/CreateAccountPage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<HomePage />} />
				<Route path="/star" element={<StarPage />} />
				<Route path="/chart" element={<ChartPage />} />
				<Route path="/mypage" element={<MyPage />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/createAccount" element={<CreateAccountPage />} />
				<Route path="/oauthsignup" element={<OauthSignUp />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
