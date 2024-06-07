export const buttonState = {
	SELECT: "선택",
	PROGRESS: "별자리 보러 가기",
	COMPLETE: "프로필 이미지로 설정",
};

export const categoryData = [
	"전체",
	"육체 활동",
	"마음 강화",
	"지식 습득",
	"기록 습관",
	"휴식ㅣ취미",
];

export const STAR_DETAIL_STATUS = {
	SELECT: "SELECT", // 아무것도 선택되지 않음(선택 가능한 상태)
	OTHER: "OTHER", // 다른 별자리 해금 진행 중
	PROGRESS: "PROGRESS", // 해금 진행 중
	COMPLETE: "COMPLETE", // 해금 완료
} as const;
