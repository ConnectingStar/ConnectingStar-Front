import type { CommonAlertType } from "@/types/common";

export type HabitRecordStatusType = "TO_DO" | "COMPLETED" | "REST" | "EXPIRED";

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
	habitRecordOneDay: HabitRecordOneDayType[];
}

export interface HabitRecordOneDayType {
	habit: HabitOneDayType;
	history: HistoryOneDayType;
	status: HabitRecordStatusType;
}

export interface HabitOneDayType {
	action: string;
	identity: string;
	place: string;
	runHabitId: number;
	runTime: string;
	unit: string;
	userId: number;
	value: number;
}

interface HistoryOneDayType {
	achievement: number;
	action: string;
	habitHistoryId: number;
	isRest: boolean;
	review: string;
	runDate: string;
	runHabitId: number;
	runPlace: string;
	runValue: string;
	userId: number;
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
