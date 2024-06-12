export const PATH = {
	CHATTING: "/chatting",
	CREATE_HABIT: "/habit-new",
	MY: "/mypage",
	STAR: "/star",
	ONBOARDING: "/onboarding",
	REST_RECORD: "/rest-record",
	PRACTICE_RECORD: (habitId: string) => `/practice-record/${habitId}`,
	EDIT_HABIT: (habitId: string) => `/habit-edit/${habitId}`,
} as const;
