import banner01 from "@/assets/image/img-homepage-banner-01.png";
import banner02 from "@/assets/image/img-homepage-banner-02.png";
import banner03 from "@/assets/image/img-homepage-banner-03.png";
import banner04 from "@/assets/image/img-homepage-banner-04.png";
import banner05 from "@/assets/image/img-homepage-banner-05.png";

import { modalType } from "@/constants/modalConstants";

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

export const daysOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];
export const msPerDay = 1000 * 60 * 60 * 24;
export const today = new Date();

export const currentDate = {
	year: today.getFullYear(),
	month: today.getMonth(),
	date: today.getDate(),
	day: today.getDay(),
};

export const REST_RECORD_TEXT =
	"괜찮습니다, 쉬는 날도 있는 거죠 :)\n\n내일은 실천하고 별을 받아가시면 좋겠어요!\n이틀 이상 쉬면 시스템화 하기 어려워지거든요\n\n일정이 있다면 약속 시간과 다른 때 하셔도 좋고\n시간이 촉박하다면 목표량 보다 낮춰도 좋아요\n\n";

export const REST_RECORD_BLUE_TEXT = {
	firstText: "아주 조금이라도 하는 것",
	lastText: "정체성을 뚜렷하게 만드는 열쇠",
};

export const deleteReasonData = [
	{
		title: "습관이 완전히 자리 잡았어요",
		subText: `100회를 넘기신 건가요? 너무너무 멋져요!!\n\n벌써 {닉네임}님과의 다음 약속이 기대되네요 :)
			`,
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

export const habitGenerateConditionsArray = [
	{
		LABEL_TEXT: "정체성",
		SPAN_TEXT: "정체성을 선택해주세요.",
		MODAL_NAME: modalType.SELECT_REASON,
	},
	{
		LABEL_TEXT: "언제",
		SPAN_TEXT: "시간을 선택해주세요.",
		MODAL_NAME: modalType.SELECT_TIME,
	},
	{
		LABEL_TEXT: "어디서",
		SPAN_TEXT: "장소를 선택해주세요.",
		MODAL_NAME: "",
	},
	{
		LABEL_TEXT: "무엇을",
		SPAN_TEXT: "습관을 선택해주세요.",
		MODAL_NAME: modalType.SELECT_CHARACTER,
	},
	{
		LABEL_TEXT: "얼마나",
		SPAN_TEXT: "숫자 입력",
		SPAN_TEXT_SECOND: "단위 입력 (예: 페이지)",
		MODAL_NAME: modalType.SELECT_AGE,
	},
	{
		LABEL_TEXT: "1차 알림",
		EXPLANATION: "약속을 상기시켜 드리는 알림이에요!",
		SPAN_TEXT: "1차 알림 시간을 선택해주세요.",
		MODAL_NAME: "",
	},
	{
		LABEL_TEXT: "2차 알림",
		EXPLANATION: "습관 기록을 독려하는 알림이에요!",
		SPAN_TEXT: "2차 알림 시간을 선택해주세요.",
		MODAL_NAME: "",
	},
];
