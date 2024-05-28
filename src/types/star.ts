type TypeName = "육체활동" | "마음강화" | "지식습득" | "기록 습관" | "휴식 | 취미" | "";
export type StarCardDetailStatus = "SELECT" | "OTHER" | "PROGRESS" | "COMPLETE";

interface StarCardDetailType {
	constellationId: number;
	typeName: TypeName;
	name: string;
	story: string;
	identity: string;
	image: string;
	starCount: number;
	status: StarCardDetailStatus;
}

export interface StarDataType {
	isLoading: boolean;
	starCardDetail: StarCardDetailType;
}
