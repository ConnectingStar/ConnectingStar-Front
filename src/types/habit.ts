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
	behaviorValue: number;
	behaviorUnit: string;
	firstAlert: { noon: string; hour: string; minute: string };
	secondAlert: { noon: string; hour: string; minute: string };
}
