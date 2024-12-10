import type { CommonAlertType } from "@/types/common";

interface adjustTimeType {
	time: CommonAlertType;
	change: number;
}

export const adjustTime = ({ time, change }: adjustTimeType) => {
	let { noon } = time;
	const { hour, minute } = time;

	let hourNumber = parseInt(hour);
	let minuteNumber = parseInt(minute) + change;

	while (minuteNumber >= 60) {
		minuteNumber -= 60;
		hourNumber += 1;
	}
	while (minuteNumber < 0) {
		minuteNumber += 60;
		hourNumber -= 1;
	}

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
		if (Number(hour) === Number(selectTime.hour) && Number(minute) < Number(selectTime.minute)) {
			return false;
		}

		if (Number(hour) < Number(selectTime.hour)) {
			return false;
		}
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
