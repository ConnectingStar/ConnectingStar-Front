export const PATH = {
	CHATTING: "/chatting",
	CREATE_HABIT: "/habit-new",
	MY: "/mypage",
	STAR: "/star",
	ONBOARDING: "/onboarding",
	REST_RECORD: "/rest-record",
	PRACTICE_RECORD: (habitId: string) => `/practice-record/${habitId}`,
	HABIT_MANAGE: (habitId: string) => `/habit-manage/${habitId}`,
} as const;
