import type { CommonAlertType } from "@/types/common";

export type HabitRecordStatusType = "TO_DO" | "COMPLETED" | "REST" | "EXPIRED";

export interface HabitDeleteRequestType {
	runHabitId?: string;
	reason: string;
}

/**
 * 프론트에서 공용으로 사용하는 Habit 객체 타입.
 * /habit API v1의 요청 타입과 동일
 */
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

/**
 * 백엔드 v2 POST API의 Request Body Type.
 * `POST /v2/habits` 의 Request Body Type을 그대로 사용함.
 */
export interface HabitPostV2RequestType {
	 /**
     * 정체성
     */
	 identity: string;
 
	 /**
	  * 실천 시간.
	  * @type {String} "HH:mm"
	  */
	 runTime: string;
 
	 /**
	  * 장소
	  */
	  place: string;
 
	 /**
	  * 행동
	  */
	  action: string;
 
	 /**
	  * 얼마나
	  */
	  value: number;
 
	 /**
	  * 단위
	  */
	  unit: string;
 
	 /**
	  * 1차 알림 (값이 없을 시 자동으로 runTime 10분 전으로 설정)
	  * @type {String} "HH:mm"
	  */
	  firstAlert?: string;
 
	 /**
	  * 2차 알림 (값이 없을 시 자동으로 runTime 30분 후로 설정)
	  * @type {String} "HH:mm"
	  */
	  secondAlert?: string;
 
	 /**
	  * 온보딩 페이지에서 호출했으면 true.
	  * 유저의 온보딩 정보를 업데이트한다.
	  */
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
	behaviorValue: string | undefined;
	achievement: number;
	review: string;
}

export interface HabitInitialStateType {
	habit: HabitType | null;
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
