export const PATH = {
	HOME: "/",
	CREATE_HABIT: "/habit-new",
	MY: "/mypage",
	MY_INFO: "/myinfo",
	STAR: "/star",
	STAR_CARD: "/star-card",
	SIGN_UP: "/sign-up",
	GUIDE: "/guide",
	ONBOARDING_USER_INFO: "/onboarding/user-info",
	ONBOARDING_HABIT: "/onboarding/habit",
	LOGIN_KAKAO: "/oauth2/kakao",
	REST_RECORD: (habitId: string, year: string, month: string, date: string) =>
		`/rest-record/${habitId}/${year}/${month}/${date}`,
	PRACTICE_RECORD: (habitId: string, year: string, month: string, date: string) =>
		`/practice-record/${habitId}/${year}/${month}/${date}`,
	HABIT_RECORD: (habitHistoryId: string) => `/habit-record/${habitHistoryId}`,
	EDIT_HABIT: (habitId?: string) => `/habit-edit/${habitId}`,
	DELETE_HABIT: (habitId?: string) => `/habit-delete/${habitId}`,
} as const;
