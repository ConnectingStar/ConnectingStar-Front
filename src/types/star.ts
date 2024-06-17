type TypeName = "육체활동" | "마음강화" | "지식습득" | "기록 습관" | "휴식 | 취미" | "";
export type StarCardStatus = "PROGRESS" | "COMPLETE" | "NONE";
export type StarCardDetailStatus = "SELECT" | "OTHER" | "PROGRESS" | "COMPLETE";
export type CategoryType = { id: number; title: string; param: string };

export interface StarDataType {
	isLoading: boolean;
	starMain: StarMainType;
	starCard: StarCardType;
	starDetail: StarDetailType;
	addStarResult: AddStarType;
}

interface StarMainType {
	constellationId: number;
	starCount: number;
	name: string;
	svg: Svg;
	isProgress: boolean;
}

interface StarCardType {
	list: StarCardItem[];
	count: number;
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

interface AddStarType {
	isRegistered: boolean;
	mainImage: string;
	characterImage: string;
}

export interface Svg {
	fill: string;
	stroke: string;
	strokeWidth: number;
	opacity: number;
	width: number;
	height: number;
	viewBox: string;
	path: string;
	circleList: Circle[];
}

export interface Circle {
	cx: number;
	cy: number;
	r: number;
	filled: boolean;
}

interface StarCardItem {
	constellationId: number;
	typeName: TypeName;
	name: string;
	image: string;
	starCount: number;
	status: StarCardStatus;
}
