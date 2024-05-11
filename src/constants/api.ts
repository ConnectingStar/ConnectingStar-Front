export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const END_POINTS = {
	FCM: "/api/fcm/register",
	LOGIN: (authCode: string | null) => `${BASE_URL}/oauth/login?socialType=K&authCode=${authCode}`,
	LOGOUT: "/oauth/logout",
	ONBOARDING: "/user/onboarding",
};
