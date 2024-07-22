import { HabitRecordRequestType } from "@/types/habit";

import { habitIconData } from "@/constants/mypage";

interface HabitPracticeRecordProps {
	habitRecord: HabitRecordRequestType;
}

const HabitPracticeRecord = ({ habitRecord }: HabitPracticeRecordProps) => {
	return (
		<>
			<div>
				<h2>정체성</h2>
				{/* api 필드 추가 필요 */}
				<p>매일 성장하는 사람</p>
			</div>
			<div>
				<h2>나는</h2>
				<div>
					<p>{habitRecord.runTime}</p>
					<p>{habitRecord.runPlace}</p>
					<p>{habitRecord.action}</p>
					<p>{habitRecord.behaviorValue}</p>
				</div>
				<h2>했다</h2>
			</div>
			<div>
				<h2>오늘의 습관 실천은</h2>
				{/* api 필드 추가 필요 */}
				{habitIconData[1].icon}
			</div>
		</>
	);
};

export default HabitPracticeRecord;
