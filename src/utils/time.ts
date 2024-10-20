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

export const earlyTimeValidation = (selectTime: CommonAlertType, runTime?: string) => {
	if (!runTime) return;

	const noon = runTime.split(" ")[0];
	const hour = runTime.split(" ")[1].split(":")[0];
	const minute = runTime.split(" ")[1].split(":")[1];

	if (noon === "오전" && selectTime.noon === "오후") {
		return false;
	}

	if (noon === selectTime.noon) {
		if (Number(hour) === Number(selectTime.hour) && Number(minute) <= Number(selectTime.minute)) {
			return false;
		}
	}

	if (Number(hour) < Number(selectTime.hour)) {
		return false;
	}

	return true;
};

export const lateTimeValidation = (selectTime: CommonAlertType, runTime?: string) => {
	if (!runTime) return;

	const noon = runTime.split(" ")[0];
	const hour = runTime.split(" ")[1].split(":")[0];
	const minute = runTime.split(" ")[1].split(":")[1];

	if (noon === "오후" && selectTime.noon === "오전") {
		return false;
	}

	if (noon === selectTime.noon) {
		if (Number(hour) === Number(selectTime.hour) && Number(minute) >= Number(selectTime.minute)) {
			return false;
		}

		if (Number(hour) > Number(selectTime.hour)) {
			return false;
		}
	}

	return true;
};

export const convertTimeString = (noon: string, hour: string, minute: string) => {
	if (noon === "오전") {
		return `${hour}:${minute}`;
	} else {
		return `${Number(hour) + 12}:${minute}`;
	}
};

export const convertFromTimeString = (time?: string) => {
	if (!time) return;

	if (Number(time.split(":")[0]) > 12) {
		const hour = Number(time.split(":")[0]) - 12;
		const minute = Number(time.split(":")[1]);

		return `오후 ${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
	} else {
		return `오전 ${time}`;
	}
};
