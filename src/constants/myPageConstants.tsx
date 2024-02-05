import BookIcon from "@/assets/icon/ic-mypage-book.svg?react";
import StarIcon from "@/assets/icon/ic-mypage-star.svg?react";

export const buttonDataWithIcon = [
	{
		id: "프로필",
		button: [
			{
				icon: <StarIcon />,
				text: "나의 별자취",
			},
			{
				icon: <BookIcon />,
				text: "습관 현황",
			},
		],
	},
];

export const buttonData = [
	{
		id: "알림",
		button: [
			{
				text: "알림 설정",
			},
		],
	},
	{
		id: "서비스 안내",
		button: [
			{
				text: "친구에게 공유하기",
			},
			{
				text: "의견 보내기",
			},
			{
				text: "스토어 평점",
			},
			{
				text: "이용약관",
			},
			{
				text: "개인정보 처리방침",
			},
			{
				text: "현재 버전",
			},
		],
	},
];
