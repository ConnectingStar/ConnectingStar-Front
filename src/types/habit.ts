import type { CommonAlertType } from "@/types/common";

export interface HabitHistoryListRequest {
	runHabitId: number;
	increase: boolean;
	isRest: boolean;
}

export interface HabitRequestType {
	identity: string;
	runTime: { noon: string; hour: string; minute: string };
	place: string;
	behavior: string;
	behaviorValue: string;
	behaviorUnit: string;
	firstAlert: { noon: string; hour: string; minute: string };
	secondAlert: { noon: string; hour: string; minute: string };
}

export interface HabitInitialStateType {
	progressHabitList: ProgressHabitListType[];
	habitHistoryList: [];
	habit: ProgressHabitListType | null;
}

interface ProgressHabitListType {
	behavior: string;
	behaviorUnit: string;
	behaviorValue: number;
	firstAlert: CommonAlertType;
	identity: string;
	place: string;
	runHabitId: number;
	runTime: CommonAlertType;
	secondAlert: CommonAlertType;
	userId: number;
	userNickname: string;
}
