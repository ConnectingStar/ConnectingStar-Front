import type { CommonAlertType } from "@/types/common";

export interface HabitDeleteRequestType {
	runHabitId?: string;
	reason: string;
}

export interface HabitHistoryListRequest {
	runHabitId: number;
	increase: boolean;
	isRest: boolean;
}

export interface HabitRequestType {
	runHabitId?: number;
	identity: string;
	runTime: { noon: string; hour: string; minute: string };
	place: string;
	behavior: string;
	behaviorValue: string;
	behaviorUnit: string;
	firstAlert: { noon: string; hour: string; minute: string };
	secondAlert: { noon: string; hour: string; minute: string };
}

export interface HabitRecordRequestType {
	runHabitId?: number;
	referenceDate: string;
	runTime: string;
	runPlace: string;
	action: string;
	behaviorValue: string | undefined;
	achievement: number;
	review: string;
}

export interface HabitInitialStateType {
	progressHabitList: HabitType[];
	habitHistoryList: [];
	habit: HabitType | null;
}

export interface HabitType {
	behavior: string;
	behaviorUnit: string;
	behaviorValue: string;
	firstAlert: CommonAlertType;
	identity: string;
	place: string;
	runHabitId?: number;
	runTime: CommonAlertType;
	secondAlert: CommonAlertType;
	// userId: number;
	// userNickname: string;
}
