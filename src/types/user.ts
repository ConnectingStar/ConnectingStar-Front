export interface UserStateType {
	userProfile: UserProfileType | null;
	userInfo: UserInfoType | null;
	isLoading: boolean;
	isOnboarding: boolean | null;
	constellationList: ConstellationListType[];
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

export interface OnboardingUserInfoType {
	nickname: string;
	genderType: string;
	ageRangeType: string;
	referrer: string;
}

interface ConstellationType {
	characterImage: string;
	constellationId: number;
	constellationTypeId: number;
	identity: string;
	image: string;
	mainImage: string;
	name: string;
	starCount: number;
	story: string;
	type: {
		constellationTypeId: number;
		name: string;
	};
}

export interface ConstellationListType {
	userConstellation: {
		userId: number;
		constellationId: number;
		regYn: boolean;
		starCount: number;
		userConstellationId: number;
		constellation: ConstellationType;
	};
	status: string;
}
