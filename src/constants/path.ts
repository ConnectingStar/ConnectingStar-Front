export const PATH = {
	HOME: "/",
	CHATTING: "/chatting",
	CREATE_HABIT: "/habit-new",
	MY: "/mypage",
	STAR: "/star",
	STAR_CARD: "/star-card",
	ONBOARDING: "/onboarding",
	REST_RECORD: "/rest-record",
	PRACTICE_RECORD: (habitId: string) => `/practice-record/${habitId}`,
	EDIT_HABIT: (habitId: string) => `/habit-edit/${habitId}`,
	DELETE_HABIT: (habitId?: string) => `/habit-delete/${habitId}`,
} as const;
