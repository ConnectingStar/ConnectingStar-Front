import type { CommonAlertType } from "@/types/common";

interface adjustTimeType {
	time: CommonAlertType;
	change: number;
}

// selectTime을 가져와서 시간을 빼거나 더 하는 함수
// 예시 adjustTime({time : {noon:"오전", hour:"08" minute:"00"}, change : -10})
export const adjustTime = ({ time, change }: adjustTimeType) => {
	let { noon } = time;
	const { hour, minute } = time;

	let hourNumber = parseInt(hour);
	let minuteNumber = parseInt(minute) + change; // 주어진 분만큼 더하거나 뺌

	// 분 조정
	while (minuteNumber >= 60) {
		minuteNumber -= 60;
		hourNumber += 1;
	}
	while (minuteNumber < 0) {
		minuteNumber += 60;
		hourNumber -= 1;
	}

	// 시간 조정
	if (hourNumber >= 12) {
		hourNumber -= 12;
		if (hourNumber === 0) hourNumber = 12;
		if (noon === "오전") noon = "오후";
		else if (noon === "오후") noon = "오전";
	} else if (hourNumber < 0) {
		hourNumber += 12;
		if (hourNumber === 0) hourNumber = 12;
		if (noon === "오전") noon = "오후";
		else if (noon === "오후") noon = "오전";
	}

	// 시간과 분을 두 자리 숫자로 포맷팅
	const newHour = hourNumber.toString().padStart(2, "0");
	const newMinute = minuteNumber.toString().padStart(2, "0");

	return {
		noon,
		hour: newHour,
		minute: newMinute,
	};
};

export const earlyTimeValidation = (selectTime: CommonAlertType, runTime?: CommonAlertType) => {
	if (!runTime) return;

	if (runTime.noon === "오후" && selectTime.noon === "오전") {
		return false;
	}

	if (runTime.noon === selectTime.noon) {
		if (
			Number(runTime.hour) === Number(selectTime.hour) &&
			Number(runTime.minute) <= Number(selectTime.minute)
		) {
			return false;
		}

		if (Number(runTime.hour) < Number(selectTime.hour)) {
			return false;
		}
	}

	return true;
};

export const lateTimeValidation = (selectTime: CommonAlertType, runTime?: CommonAlertType) => {
	if (!runTime) return;

	if (runTime.noon === "오전" && selectTime.noon === "오후") {
		return false;
	}

	if (runTime.noon === selectTime.noon) {
		if (
			Number(runTime.hour) === Number(selectTime.hour) &&
			Number(runTime.minute) >= Number(selectTime.minute)
		) {
			return false;
		}

		if (Number(runTime.hour) > Number(selectTime.hour)) {
			return false;
		}
	}

	return true;
};
