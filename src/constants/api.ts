export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const END_POINTS = {
	FCM: "/api/fcm/register",
	LOGIN: (authCode: string | null) => `${BASE_URL}/oauth/login?socialType=K&authCode=${authCode}`,
	LOGOUT: "/oauth/logout",
	ONBOARDING: "/user/onboarding",
	IS_ONBOARDING: "/user/check-onboarding",
	WITHDRAWAL: "/oauth/unlink/kakao",
	CONSTELLATION_LIST: "/user/constellation/list",
	USER_INFO: "/user/basic-info",
	USER_INFO_WITH_HABIT: "/user/basic-info-habit",
	EDIT_NICKNAME: "/user/nickname",
	EDIT_GENDER: "/user/gender",
};

export const OAUTH_KAKAO_URL = `${BASE_URL}/oauth/code/url?socialType=K`;
