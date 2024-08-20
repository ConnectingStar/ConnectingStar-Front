import type { CommonAlertType } from "@/types/common";

export type HabitRecordStatusType = "TO_DO" | "COMPLETED" | "REST" | "EXPIRED";

export interface HabitDeleteRequestType {
	runHabitId?: string;
	reason: string;
}

export interface HabitRequestV2Type {
	identity: string;
	runTime: string;
	place: string;
	action: string;
	value: number | null;
	unit: string;
	firstAlert: string;
	secondAlert: string;
	isOnboarding?: boolean;
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

interface HabitV2Type extends HabitRequestV2Type {
	habitAlerts: HabitAlertType[];
}

interface HabitAlertType {
	habitAlertId: number;
	runHabitId: number;
	alertOrder: number;
	alertTime: string;
	alertStatus: boolean;
}

export interface HabitInitialStateType {
	habit: HabitV2Type | null;
	habitRecord: HistoryOneDayType | null;
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

export interface HistoryOneDayType {
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
	runHabit: HabitOneDayType;
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
