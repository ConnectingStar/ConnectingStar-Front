export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const ACCESS_TOKEN_KEY = "ACCESS_TOKEN";

export const END_POINTS = {
	FCM: "/api/fcm/register",
	REFRESH: "/oauth/issue",
	LOGIN: "/oauth/login",
	LOGOUT: "/oauth/logout",
	ONBOARDING: "/user/onboarding",
	IS_ONBOARDING: "/user/check-onboarding",
	WITHDRAWAL: "/user/withdraw",
	CONSTELLATION_LIST: "/user/constellation/list",
	USER_INFO: "/user/basic-info",
	USER_INFO_WITH_HABIT: "/user/basic-info-habit",
	USER_IDENTITY: "/user/identity-info",
	EDIT_NICKNAME: "/user/nickname",
	EDIT_GENDER: "/user/gender",
	EDIT_AGE: "/user/age-range",
	EDIT_IDENTITY: "/user/identity",
	HABIT_ONE: (runHabitId: number) => `/habit/one?runHabitId=${runHabitId}`,
	PROGRESS_HABIT_LIST: "/habit",
	PROGRESS_HABIT: (referenceDate: string) => `/habit/day?referenceDate=${referenceDate}`,
	HABIT_RECORD_ONE_DAY: (date: string) => `/v2/habits/daily-trackings?date=${date}`,
	HABIT: "/habit",
	HABIT_REST_RECORD: "/habit/history/rest",
	HABIT_HISTORY: "/habit/history",
	HABIT_HISTORY_LIST: (runHabitId: number, increase: boolean, isRest: boolean) =>
		`/habit/history?runHabitId=${runHabitId}&increase=${increase}&isRest=${isRest}`,
	HABIT_HISTORY_ONE: (runHabitId: number, referenceDate: string) =>
		`/habit/history/date?runHabitId=${runHabitId}&referenceDate=${referenceDate}`,
	STAR_MAIN: "/constellation/main",
	STAR_CARD: (id: string, isRegistered: boolean) =>
		`constellation/list?constellationTypeId=${id}&isRegistered=${isRegistered}`,
	STAR_DETAIL: (id: string) => `constellation?constellationId=${id}`,
	USER_CONSTELLATION: "/user/constellation",
	ADD_STAR: "user/constellation/star",
};

export const OAUTH_KAKAO_URL = `${BASE_URL}/oauth/code/url?socialType=K`;
