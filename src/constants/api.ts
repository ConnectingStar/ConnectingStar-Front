export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const ACCESS_TOKEN_KEY = "ACCESS_TOKEN";

export const END_POINTS = {
	FCM: "/api/fcm/register",
	REFRESH: "/oauth/issue",
	LOGIN: "/oauth/login",
	LOGOUT: "/oauth/logout",
	ONBOARDING: "/v2/users/me/onboarding",
	IS_ONBOARDING: "/user/check-onboarding",
	WITHDRAWAL: "/user/withdraw",
	CONSTELLATION_LIST_V2: (constellationTypeId?: string, isRegistered?: boolean, related?: string) =>
		`/v2/users/me/constellations?related=${related}&constellationTypeId=${constellationTypeId}&isRegistered=${isRegistered}`,
	ONLY_USER_INFO: "/v2/users/me",
	USER_INFO: "/v2/users/me/profile",
	USER_IDENTITY: "/user/identity-info",
	EDIT_NICKNAME: "/user/nickname",
	EDIT_GENDER: "/user/gender",
	EDIT_AGE: "/user/age-range",
	EDIT_IDENTITY: "/user/identity",
	HABIT_RECORD_ONE_DAY: (date: string) => `/v2/habits/daily-trackings?date=${date}`,
	HABIT: "/v2/habits",
	HABIT_WITH_ALERT: (runHabtId: number) => `/v2/habits/${runHabtId}?related=habitAlerts`,
	HABIT_ID: (runHabtId?: string) => `/v2/habits/${runHabtId}`,
	HABIT_REST_RECORD: "/v2/histories/rest",
	HABIT_HISTORY: "/v2/histories",
	HABIT_HISTORY_ONE: (habitHistoryId: number) => `v2/histories/${habitHistoryId}?related=runHabit`,
	STAR_MAIN: "/constellation/main",
	STAR_CARD: (id: string, isRegistered: boolean) =>
		`constellation/list?constellationTypeId=${id}&isRegistered=${isRegistered}`,
	STAR_DETAIL: (id: string) => `constellation?constellationId=${id}`,
	USER_CONSTELLATION: "/v2/users/me/constellations",
	USER_PROFILE_CONSTELLATION: "/v2/users/me/profile-constellation",
	ADD_STAR: "user/constellation/star",
};

export const OAUTH_KAKAO_URL = `${BASE_URL}/oauth/code/url?socialType=K`;
