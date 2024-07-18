import banner01 from "@/assets/image/img-homepage-banner-01.png";
import banner02 from "@/assets/image/img-homepage-banner-02.png";
import banner03 from "@/assets/image/img-homepage-banner-03.png";
import banner04 from "@/assets/image/img-homepage-banner-04.png";
import banner05 from "@/assets/image/img-homepage-banner-05.png";

export const adviceImages = [
	{
		src: banner01,
		alt: "advice banner 01",
	},
	{
		src: banner02,
		alt: "advice banner 02",
	},
	{
		src: banner03,
		alt: "advice banner 03",
	},
	{
		src: banner04,
		alt: "advice banner 04",
	},
	{
		src: banner05,
		alt: "advice banner 05",
	},
];

export const REST_RECORD_TEXT =
	"괜찮습니다, 쉬는 날도 있는 거죠 :)\n\n내일은 실천하고 별을 받아가시면 좋겠어요!\n이틀 이상 쉬면 시스템화 하기 어려워지거든요\n\n일정이 있다면 약속 시간과 다른 때 하셔도 좋고\n시간이 촉박하다면 목표량 보다 낮춰도 좋아요\n\n";

export const REST_RECORD_BLUE_TEXT = {
	firstText: "아주 조금이라도 하는 것",
	lastText: "정체성을 뚜렷하게 만드는 열쇠",
};

export const DELETE_REASON_DATA = [
	{
		title: "습관이 완전히 자리 잡았어요",
		subText: `100회를 넘기신 건가요? 너무너무 멋져요!!\n\n`,
	},
	{
		title: "실수로 잘못 만들었어요",
		subText: "괜찮아요, 종료 후 다시 만들어 볼까요?",
	},
	{
		title: "추가 약속을 위한 슬롯이 부족해요",
		subText: "죄송해요ㅜㅜ 슬롯 확장을 준비 중이에요",
	},
	{
		title: "실천하기 어려운 습관이에요",
		subText:
			"괜찮아요, 종료 대신 난이도를 낮춰 볼까요?\n\n편한 시간이나 장소, 쉬운 정도로 설정해 보세요\n\n홈 화면의 습관 약속 가이드를 참고하면 좋아요",
	},
	{
		title: "결과가 만족스럽지 않아요",
		subText:
			"좋아하는 것을 덧붙여 보는 건 어떨까요?\n\n가기만 해도 기분 좋은 장소에서 할 수도 있고\n\n약속을 마친 뒤 스스로에게 보상을 줘도 좋아요",
	},
	{
		title: "직접 입력",
		placeholder: "삭제 이유를 입력해 주세요",
		subText: "다음 약속으로 또 만나길 기다릴게요 :)",
	},
];

export const STAR_PRAIZE_TEXT_DATA = [
	{
		id: "less",
		blueText: `완벽의 강박을 덜어낸\n당신에게 `,
		yellowText: `별을 드릴게요!`,
		comment: ` 사람에\n한 걸음 더 다가갔군요 😊`,
	},
	{
		id: "enough",
		blueText: `생각한 대로 해내는\n당신에게 `,
		yellowText: `별을 드려요!`,
		comment: `이\n한층 뚜렷해졌어요 😊`,
	},
	{
		id: "many",
		blueText: `목표치를 초과 달성한\n당신에게 `,
		yellowText: `별을 드립니다!`,
		comment: ` 사람에\n가까워지고 있어요 😊`,
	},
];

export type AlarmData = {
	key: number;
	title: string;
	time: string;
	comment: string;
	isActive: boolean;
};

export const habitManageAlarms: AlarmData[] = [
	{
		key: 0,
		title: "1차 알림",
		time: "오후 7:50",
		comment: "곧 약속 시간이에요 :) 성장하는 세림님 화이팅!",
		isActive: false,
	},
	{
		key: 1,
		title: "2차 알림",
		time: "오후 8:30",
		comment: "오늘의 실천 결과는 어땠나요? 기록을 남기고 별 받아 가세요!",
		isActive: true,
	},
];

type homeHabit = {
	state: "" | "complete" | "rest" | "end";
	text: string;
};

export const homeHabitList: homeHabit[] = [
	{
		state: "",
		text: "안녕",
	},
	{
		state: "complete",
		text: "오후 8시에 우리 집 안 내 책상 위에서 책 읽기 5 페이지",
	},
	{
		state: "rest",
		text: "안녕2",
	},
	{
		state: "end",
		text: "안녕3",
	},
];
