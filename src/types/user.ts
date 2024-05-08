import { CommonResponseType } from "@/types/common";

export interface ConstellationListType extends CommonResponseType {
	list: ConstellationList[];
	count: number;
}

export interface ConstellationList {
	constellationId: number;
	imageUrl: string;
}
