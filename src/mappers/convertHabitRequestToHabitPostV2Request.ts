import { HabitPostV2RequestType, HabitRequestType } from "@/types/habit";
import { convertTimeString } from "@/utils/time";

/**
 * HabitRequestType을 HabitPostV2Request 타입으로 변환합니다.
 */
export const convertHabitRequestToHabitPostV2Request = (
    habitRequest: HabitRequestType,
    isOnboarding?: boolean
): HabitPostV2RequestType => {

    const convertTime = ({noon, hour, minute}: {noon: string, hour: string, minute: string}) => {
        return convertTimeString(noon, hour, minute)
    }

    return {
        identity: habitRequest.identity,
        runTime: convertTime(habitRequest.runTime),
        place: habitRequest.place,
        action: habitRequest.behavior,
        value: Number(habitRequest.behaviorValue),
        unit: habitRequest.behaviorUnit,
        firstAlert: habitRequest.firstAlert && convertTime(habitRequest.firstAlert),
        secondAlert: habitRequest.secondAlert && convertTime(habitRequest.secondAlert),
        isOnboarding
   }
}