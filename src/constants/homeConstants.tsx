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
