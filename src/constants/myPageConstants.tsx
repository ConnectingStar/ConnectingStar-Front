import BadIcon from "@/assets/icon/ic-emoticon-bad.svg?react";
import GoodIcon from "@/assets/icon/ic-emoticon-good.svg?react";
import NormalIcon from "@/assets/icon/ic-emoticon-normal.svg?react";
import VeryBadIcon from "@/assets/icon/ic-emoticon-very-bad.svg?react";
import VeryGoodIcon from "@/assets/icon/ic-emoticon-very-good.svg?react";
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
				subText: "최신 버전 사용중",
			},
		],
	},
];

export const myInfoButtonData = [
	{
		id: "내 정보",
		button: [
			{
				text: "정체성",
				subText: "매일 성장하는",
			},
			{
				text: "닉네임",
				subText: "사용자 닉네임",
			},
			{
				text: "성별",
				subText: "여",
			},
			{
				text: "나이대",
				subText: "20-24",
			},
		],
	},
	{
		id: "로그인 계정",
		button: [
			{
				text: "간편로그인",
				subText: "카카오톡",
			},
		],
	},
];

export const starTraceButtonData = [
	{
		text: "책 읽기",
	},
	{
		text: "러닝 하기",
	},
	{
		text: "감사일기 작성하기",
	},
	{
		text: "감사일기 작성하기2",
	},
	{
		text: "감사일기 작성하기3",
	},
];

export const habitIconData = [
	{
		id: 1,
		icon: <VeryBadIcon />,
	},
	{
		id: 2,
		icon: <BadIcon />,
	},
	{
		id: 3,
		icon: <NormalIcon />,
	},
	{
		id: 4,
		icon: <GoodIcon />,
	},
	{
		id: 5,
		icon: <VeryGoodIcon />,
	},
];
