import type { ConstellationList } from "@/types/user";

export interface userType {
	userData: onboardingUserDataType;
	userInfo: UserInfoType | null;
	isLoading: boolean;
	isOnboarding: boolean | null;
	constellationList: ConstellationList[];
	userIdentityList: { identity: string }[];
}

interface UserInfoType {
	id: number;
	email: string;
	socialType: "KAKAO";
	nickname: string;
	ageRange: string;
	gender: string;
	identity: string;
	onboard: boolean;
	star: number;
	referrer: string;
	constellationId: number;
	constellation: ConstellationType;
	defaultCharacterImage: string;
}

interface ConstellationType {
	constellationId: number;
	name: string;
	story: string;
	identity: string;
	image: string;
	characterImage: string;
	mainImage: string;
	starCount: number;
	constellationTypeId: number;
}

export interface UserDataType {
	data: onboardingUserDataType;
}

export interface UserInfoType {
	nickname: string;
	genderType: string;
	ageRangeType: string;
	referrer: string;
}

export interface onboardingUserDataType {
	nickname: string;
	genderType: string;
	ageRangeType: string;
	referrer: string;
	identity: string;
	runTime: { noon: string; hour: string; minute: string };
	place: string;
	behavior: string;
	behaviorValue: number | string;
	behaviorUnit: string;
	firstAlert: { noon: string; hour: string; minute: string };
	secondAlert: { noon: string; hour: string; minute: string };
}
