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

export const leaveReasonData = [
	{
		title: "자주 사용하지 않아요",
		placeholder: "어떤 점 때문에 자주 사용하지 않게 되었나요?",
		subText:
			"조금 더 발전해서 다음 만남에는\n더욱 매력적인 Tars가 되어 볼게요!\n\n만나서 반가웠어요 :)\n앞으로의 행보도 응원합니다!",
	},
	{
		title: "사용 방법이 어려워요",
		placeholder: "어떤 부분이 어렵게 느껴지셨나요?",
		subText:
			"어렵게 느껴졌군요😥\n\n말씀해주신 것을 기반으로 개선을 거쳐\n조금 더 사용자 친화적인 Tars가 되겠습니다!",
	},
	{
		title: "필요한 기능이 없어요",
		placeholder: "어떤 기능이 필요하셨나요?",
		subText:
			"필요한 기능이 있다고 생각하시는 건\n그만큼 발전의 여지가 있다는 뜻이겠죠?\n\n열심히 개발해서 다음 만남에는\n만족스러운 Tars를 보여드릴게요!",
	},
	{
		title: "오류 때문에 불편해요",
		placeholder: "어떤 오류가 불편하게 만들었나요?",
		subText:
			"불편함을 느끼게 만든 점 정말 죄송합니다 😥\n\n빠르게 수정하겠습니다\n알려주셔서 감사드려요!",
	},
	{
		title: "새 계정을 만들고 싶어요",
		subText: "그러셨군요! 금방 다시 만나요 우리 :)",
	},
	{
		title: "직접 입력",
		placeholder: "탈퇴를 결심한 이유는 무엇인가요?",
		subText:
			"조금 더 발전해서 다음 만남에는\n더욱 매력적인 Tars가 되어 볼게요!\n\n만나서 반가웠어요 :)\n앞으로의 행보도 응원합니다!",
	},
];
