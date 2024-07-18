export const PATH = {
	HOME: "/",
	CHATTING: "/chatting",
	CREATE_HABIT: "/habit-new",
	MY: "/mypage",
	STAR: "/star",
	STAR_CARD: "/star-card",
	ONBOARDING: "/onboarding",
	LOGIN_KAKAO: "/oauth2/kakao",
	REST_RECORD: "/rest-record",
	PRACTICE_RECORD: (habitId: string, year: string, month: string, date: string) =>
		`/practice-record/${habitId}/${year}/${month}/${date}`,
	EDIT_HABIT: (habitId?: string) => `/habit-edit/${habitId}`,
	DELETE_HABIT: (habitId?: string) => `/habit-delete/${habitId}`,
} as const;
