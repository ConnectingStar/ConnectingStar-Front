import BellImg from "@/assets/image/img-onboarding-bell.png";
import PromiseImg from "@/assets/image/img-onboarding-promise.png";
import StarsImg from "@/assets/image/img-onboarding-stars.png";

export const ONBOARDING_STEP = {
	OAUTH_SIGN_UP: "oauth-sign-up",
	CREATE_ACCOUNT: "create-account",
	REFERRER: "referrer",
};

export const STEP_KEY = "step";

export const GUIDE_DATA = [
	{
		img: PromiseImg,
		text: `버디와 맺은 <span>약속</span>을 실천하며\n <span>탄탄한 습관</span>을 만들어 가요`,
	},
	{
		img: BellImg,
		text: `습관 가이드와 매일 알림으로\n <span>매일 실천</span> 가능하도록!`,
	},
	{
		img: StarsImg,
		text: `실천을 기록할 때마다 <span>별</span>을\n 받고 별자리를 채워 보세요!`,
	},
];

export const visitorRouteData = ["앱 스토어", "지인 추천", "SNS 광고", "검색", "기타"];

export const genderTypeList = [
	{
		text: "남",
		code: "M",
	},
	{
		text: "여",
		code: "F",
	},
	{
		text: "선택 안 함",
		code: "N",
	},
];

export const ageRangeTypeList = [
	{
		text: "15-19",
		code: "A",
	},
	{
		text: "20-24",
		code: "B",
	},
	{
		text: "25-29",
		code: "C",
	},
	{
		text: "30-34",
		code: "D",
	},
	{
		text: "35-39",
		code: "E",
	},
	{
		text: "40-44",
		code: "F",
	},
	{
		text: "45-49",
		code: "G",
	},
	{
		text: "50-54",
		code: "H",
	},
	{
		text: "55 이상",
		code: "I",
	},
];
