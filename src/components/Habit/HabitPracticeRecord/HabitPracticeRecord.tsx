import { HistoryOneDayType } from "@/types/habit";

import { habitIconData } from "@/constants/mypage";

interface HabitPracticeRecordProps {
	habitRecord: HistoryOneDayType;
}

const HabitPracticeRecord = ({ habitRecord }: HabitPracticeRecordProps) => {
	const noon = Number(habitRecord.runDate.split("T")[1].split(":")[0]) > 12 ? "오후" : "오전";
	const hour =
		Number(habitRecord.runDate.split("T")[1].split(":")[0]) > 12
			? (Number(habitRecord.runDate.split("T")[1].split(":")[0]) - 12).toString().padStart(2, "0")
			: Number(habitRecord.runDate.split("T")[1].split(":")[0]).toString().padStart(2, "0");
	const minute = Number(habitRecord.runDate.split("T")[1].split(":")[1])
		.toString()
		.padStart(2, "0");

	return (
		<>
			<div>
				<h2>정체성</h2>
				<p>{habitRecord.runHabit.identity}</p>
			</div>
			<div>
				<h2>나는</h2>
				<div>
					<p>
						{noon} {hour}시 {minute}분에
					</p>
					<p>{habitRecord.runPlace}</p>
					<p>{habitRecord.action}</p>
					<p>
						{habitRecord.runValue} {habitRecord.runHabit.unit}
					</p>
				</div>
				<h2>했다</h2>
			</div>
			<div>
				<h2>오늘의 습관 실천은</h2>
				{habitIconData[habitRecord.achievement - 1].icon}
			</div>
		</>
	);
};

export default HabitPracticeRecord;
