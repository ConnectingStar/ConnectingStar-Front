export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const END_POINTS = {
	FCM: "/api/fcm/register",
	LOGIN: "/oauth/login",
	LOGOUT: "/oauth/logout",
	ONBOARDING: "/user/onboarding",
	IS_ONBOARDING: "/user/check-onboarding",
	WITHDRAWAL: "/oauth/unlink/kakao",
	CONSTELLATION_LIST: "/user/constellation/list",
	USER_INFO: "/user/basic-info",
	USER_INFO_WITH_HABIT: "/user/basic-info-habit",
	USER_IDENTITY: "/user/identity-info",
	EDIT_NICKNAME: "/user/nickname",
	EDIT_GENDER: "/user/gender",
	EDIT_AGE: "/user/age-range",
	EDIT_IDENTITY: "/user/identity",
	PROGRESS_HABIT_LIST: "/habit",
	HABIT_HISTORY_LIST: (runHabitId: number, increase: boolean, isRest: boolean) =>
		`/habit/history?runHabitId=${runHabitId}&increase=${increase}&isRest=${isRest}`,
};

export const OAUTH_KAKAO_URL = `${BASE_URL}/oauth/code/url?socialType=K`;
