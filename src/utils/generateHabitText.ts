import type { CommonAlertType } from "@/types/common";

export const generateHabitText = (
	runTime: CommonAlertType,
	place: string,
	behavior: string,
	behaviorValue: number,
	behaviorUnit: string,
) => {
	return `${runTime.noon} ${runTime.hour}시 ${runTime.minute}분에 ${place}에서 ${behavior} ${behaviorValue}${behaviorUnit}`;
};
