import type { ConstellationList } from "@/types/user";

export interface UserStateType {
	userProfile: UserProfileType | null;
	userInfo: UserInfoType | null;
	isLoading: boolean;
	isOnboarding: boolean | null;
	constellationList: ConstellationList[];
	userIdentityList: { identity: string }[];
}

interface UserType extends UserInfoType {
	user: ConstellationType;
}

interface UserProfileType {
	user: UserType;
	defaultCharacterImage: string;
}

export interface UserInfoType {
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

export interface OnboardingUserInfoType {
	nickname: string;
	genderType: string;
	ageRangeType: string;
	referrer: string;
}
