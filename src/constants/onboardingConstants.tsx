import BellImg from "@/assets/image/img-onboarding-bell.png";
import GearImg from "@/assets/image/img-onboarding-gear.png";
import StarsImg from "@/assets/image/img-onboarding-stars.png";

import { theme } from "@/styles/theme";

export const signUpData = [
	{
		img: GearImg,
		text: `목표를 세우지 말고 Tars와\n함께 <span style="color:${theme.color.main_blue}">시스템</span>을 만들어 가요 :)`,
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
