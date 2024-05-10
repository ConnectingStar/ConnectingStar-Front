import type { ConstellationList } from "@/types/user";

export interface userType {
	userData: onboardingUserDataType;
	isLoading: boolean;
	isOnboarding: boolean;
	constellation: ConstellationList[];
	test: {
		nickname: string;
		profileCharacter: string;
	};
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
	behaviorValue: number;
	behaviorUnit: string;
	firstAlert: { noon: string; hour: string; minute: string };
	secondAlert: { noon: string; hour: string; minute: string };
}

export interface basicUserDataType {
	nickname: string;
	genderType: string;
	ageRangeType: string;
}

export interface habitUserDataType {
	identity?: string;
	runTime?: { noon: string; hour: string; minute: string };
	place?: string;
	behavior?: string;
	behaviorValue?: number;
	behaviorUnit?: string;
	firstAlert?: { noon: string; hour: string; minute: string };
	secondAlert?: { noon: string; hour: string; minute: string };
}
