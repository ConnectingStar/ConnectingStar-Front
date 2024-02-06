import ChartDisabledIcon from "@/assets/icon/ic-gnb-chart-disabled.svg?react";
import ChartIcon from "@/assets/icon/ic-gnb-chart.svg?react";
import HomeDisabledIcon from "@/assets/icon/ic-gnb-home-disabled.svg?react";
import HomeIcon from "@/assets/icon/ic-gnb-home.svg?react";
import PersonDisabledIcon from "@/assets/icon/ic-gnb-person-disabled.svg?react";
import PersonIcon from "@/assets/icon/ic-gnb-person.svg?react";
import StarDisabledIcon from "@/assets/icon/ic-gnb-star-disabled.svg?react";
import StarIcon from "@/assets/icon/ic-gnb-star.svg?react";

export const gnbData = [
	{
		id: "home",
		link: "/home",
		icon: <HomeIcon />,
		disabledIcon: <HomeDisabledIcon />,
	},
	{
		id: "star",
		link: "/star",
		icon: <StarIcon />,
		disabledIcon: <StarDisabledIcon />,
	},
	{
		id: "chart",
		link: "/chart",
		icon: <ChartIcon />,
		disabledIcon: <ChartDisabledIcon />,
	},
	{
		id: "my",
		link: "/mypage",
		icon: <PersonIcon />,
		disabledIcon: <PersonDisabledIcon />,
	},
];
