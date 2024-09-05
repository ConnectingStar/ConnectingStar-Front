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

export interface HabitRestRecordRequestType {
	runHabitId?: number;
	referenceDate: string;
	review: string;
}

export interface HabitRecordRequestType extends HabitRestRecordRequestType {
	runTime: string;
	runPlace: string;
	action: string;
	runValue: number | undefined;
	achievement: number;
	review: string;
}

export interface HabitV2Type extends HabitRequestV2Type {
	habitAlerts: HabitAlertType[];
	runHabitId: number;
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
	habitList: HabitOneDayType[] | null;
	habitRecord: HistoryOneDayType | null;
	habitRecordOneDay: HabitRecordOneDayType[];
	habitRecordList: HistoryOneDayType[] | null;
	habitListWithStatus: HabitOneDayTypeWithStatus[] | null;
	habitListIsEnd: EndHabitType[] | null;
	isHabitLoading: boolean;
}

export interface HabitOneDayTypeWithStatus extends HabitOneDayType {
	createdAt: Date;
	historyCountByStatus: {
		completedCount: number;
		restCount: number;
	};
}

export interface HabitRecordOneDayType {
	habit: HabitOneDayType;
	history: HistoryOneDayType;
	status: HabitRecordStatusType;
}

export interface EndHabitType {
	quitHabitId: number;
	userId: number;
	runTime: string;
	place: string;
	action: string;
	unit: string;
	value: number;
	completedHistoryCount: number;
	restHistoryCount: number;
	reasonOfQuit: string;
	startDate: Date;
	quitDate: Date;
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

export interface HabitHistoryRequestType {
	runHabitId: number;
	isRest: boolean | null;
	page: number;
	size: number;
	sortBy: string;
	sortOrder: string;
	related: string;
}
