import { BrowserRouter, Routes, Route } from "react-router-dom";

import ToastContainer from "@/components/common/Toast/ToastContainer/ToastContainer";

import KakaoLoginPage from "./pages/KakaoLoginPage";

import ChartPage from "@/pages/ChartPage";
import ChattingPage from "@/pages/ChattingPage";
import HabitDeletePage from "@/pages/HabitDeletePage";
import HabitDetailPage from "@/pages/HabitDetailPage";
import HabitGeneratePage from "@/pages/HabitGeneratePage";
import HabitRecordPage from "@/pages/HabitRecordPage";
import HomePage from "@/pages/HomePage";
import MyHabitPage from "@/pages/MyHabitPage";
import MyInfoPage from "@/pages/MyInfoPage";
import MyPage from "@/pages/MyPage";
import MyStarTracePage from "@/pages/MyStarTracePage";
import NotificationSettingPage from "@/pages/NotificationSettingPage";
import OnboardingPage from "@/pages/OnboardingPage";
import RestRecordPage from "@/pages/RestRecordPage";
import StarCardDetailPage from "@/pages/StarCardDetailPage";
import StarCardPage from "@/pages/StarCardPage";
import StarMainPage from "@/pages/StarMainPage/StarMainPage";
import WithdrawalPage from "@/pages/WithdrawalPage";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/:id" element={<HabitDetailPage />} />
					<Route path="/star" element={<StarMainPage />} />
					<Route path="/star-card" element={<StarCardPage />} />
					<Route path="/star-card/:id" element={<StarCardDetailPage />} />
					<Route path="/chart" element={<ChartPage />} />
					<Route path="/mypage" element={<MyPage />} />
					<Route path="/myinfo" element={<MyInfoPage />} />
					<Route path="/star-trace" element={<MyStarTracePage />} />
					<Route path="/habit-history" element={<MyHabitPage />} />
					<Route path="/notification-setting" element={<NotificationSettingPage />} />
					<Route path="/withdrawal" element={<WithdrawalPage />} />
					<Route path="/rest-record" element={<RestRecordPage />} />
					<Route path="/chatting" element={<ChattingPage />} />
					<Route path="/habit-delete" element={<HabitDeletePage />} />
					<Route path="/onboarding" element={<OnboardingPage />} />
					<Route path="/oauth2/kakao" element={<KakaoLoginPage />} />
					<Route path="/habit-record" element={<HabitRecordPage />} />
					<Route path="/habit-generate" element={<HabitGeneratePage />} />
				</Routes>
			</BrowserRouter>
			<ToastContainer />
		</>
	);
};

export default App;
