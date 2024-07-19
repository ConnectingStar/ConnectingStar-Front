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

export interface GetHabitRecordRequestType {
	runHabitId: number;
	referenceDate: string;
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

export interface HabitRestRecordRequestType {
	runHabitId?: number;
	referenceDate: string;
	review: string;
}

export interface HabitRecordRequestType extends HabitRestRecordRequestType {
	runTime: string;
	runPlace: string;
	action: string;
	behaviorValue: string | undefined;
	achievement: number;
	review: string;
}

interface ProgressHabitType extends HabitType {
	habitStatus: number;
}

export interface HabitInitialStateType {
	progressHabitList: HabitType[];
	progressHabit: ProgressHabitType[];
	habitHistoryList: [];
	habit: HabitType | null;
	habitRecord: HabitRecordRequestType | null;
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
