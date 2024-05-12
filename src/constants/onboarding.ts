import BellImg from "@/assets/image/img-onboarding-bell.png";
import PromiseImg from "@/assets/image/img-onboarding-promise.png";
import StarsImg from "@/assets/image/img-onboarding-stars.png";

import { theme } from "@/styles/theme";

export const ONBOARDING_STEP = {
	SPLASH: "splash",
	GUIDE_LINE: "guide-line",
	OAUTH_SIGN_UP: "oauth-sign-up",
	CREATE_ACCOUNT: "create-account",
	VISITOR_ROUTE: "visitor-route",
};

export const STEP_KEY = "step";

export const GUIDE_DATA = [
	{
		img: PromiseImg,
		text: `버디와 맺은 <span style="color:${theme.color.main_blue}">약속</span>을 실천하며\n <span style="color:${theme.color.main_blue}">탄탄한 습관</span>을 만들어 가요`,
	},
	{
		img: BellImg,
		text: `습관 가이드와 매일 알림으로\n <span style="color:${theme.color.main_blue}">매일 실천</span> 가능하도록!`,
	},
	{
		img: StarsImg,
		text: `실천을 기록할 때마다 <span style="color:${theme.color.main_blue}">별</span>을\n 받고 별자리를 채워 보세요!`,
	},
];

export const visitorRouteData = ["앱 스토어", "지인 추천", "SNS 광고", "검색", "기타"];
