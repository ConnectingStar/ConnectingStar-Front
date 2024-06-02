type TypeName = "육체활동" | "마음강화" | "지식습득" | "기록 습관" | "휴식 | 취미" | "";
export type StarCardStatus = "PROGRESS" | "COMPLETE" | "NONE";
export type StarCardDetailStatus = "SELECT" | "OTHER" | "PROGRESS" | "COMPLETE";

interface StarCardType {
	list: StarCardItem[];
	count: number;
}

interface StarCardItem {
	constellationId: number;
	typeName: TypeName;
	name: string;
	image: string;
	starCount: number;
	status: StarCardStatus;
}

interface StarDetailType {
	constellationId: number;
	typeName: TypeName;
	name: string;
	story: string;
	identity: string;
	image: string;
	starCount: number;
	status: StarCardDetailStatus;
	isProfile: boolean;
}

export interface StarDataType {
	isLoading: boolean;
	starCard: StarCardType;
	starDetail: StarDetailType;
}
