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

export interface ConstellationList {
	userConstellation: {
		userId: number;
		constellationId: number;
		regYn: boolean;
		starCount: number;
		userConstellationId: number;
		constellation: ConstellationType;
	};
	status: string;
	// constellationId: number;
	// imageUrl: string;
}

export interface UserInfoType {
	nickname: string;
	profileCharacter: string;
}

export interface WithdrawalRequestType {
	reason: string;
	content: string;
	deletedDt: string;
}

export interface EditProfileImageRequestType {
	constellationId: string;
	related?: string;
}

export interface GetUserConstellationListRequestType {
	constellationTypeId?: string;
	isRegistered?: boolean;
	related?: string;
}
