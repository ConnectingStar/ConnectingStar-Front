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
