import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChartPage from "@/pages/ChartPage";
import CreateAccountPage from "@/pages/CreateAccountPage";
import HomePage from "@/pages/HomePage";
import MyHabitPage from "@/pages/MyHabitPage";
import MyInfoPage from "@/pages/MyInfoPage";
import MyPage from "@/pages/MyPage";
import MyStarTracePage from "@/pages/MyStarTracePage";
import NotificationSettingPage from "@/pages/NotificationSettingPage";
import RestRecordPage from "@/pages/RestRecordPage";
import OauthSignUp from "@/pages/SignUp/OauthSignUp";
import SignUp from "@/pages/SignUp/SignUp";
import StarCardDetailPage from "@/pages/StarCardDetailPage";
import StarCardPage from "@/pages/StarCardPage";
import DiscoveryRoutePage from "@/pages/VisitTrackPage";
import VisitTrackPage from "@/pages/VisitTrackPage";
import WithdrawalPage from "@/pages/WithdrawalPage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<HomePage />} />
				<Route path="/star-card" element={<StarCardPage />} />
				<Route path="/star-card/:id" element={<StarCardDetailPage />} />
				<Route path="/chart" element={<ChartPage />} />
				<Route path="/mypage" element={<MyPage />} />
				<Route path="/myinfo" element={<MyInfoPage />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/oauthsignup" element={<OauthSignUp />} />
				<Route path="/createAccount" element={<CreateAccountPage />} />
				<Route path="/visitTrackPage" element={<VisitTrackPage />} />
				<Route path="/star-trace" element={<MyStarTracePage />} />
				<Route path="/habit-history" element={<MyHabitPage />} />
				<Route path="/notification-setting" element={<NotificationSettingPage />} />
				<Route path="/withdrawal" element={<WithdrawalPage />} />
				<Route path="/rest-record" element={<RestRecordPage />} />
				<Route path="/discoveryRoute" element={<DiscoveryRoutePage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
