// import { useState } from "react";

import ExclamationMark from "@/assets/icon/ic-exclamation-mark.svg?react";

import { habitRecordStyle } from "@/components/HabitRecord/HabitRecord.style";

function HabitRecord() {
	const today = new Date();
	// const [habitRecord, setHabitRecord] = useState({
	// 	when: "",
	// 	where: "",
	// 	what: "",
	// });

	return (
		<div css={habitRecordStyle.container}>
			<main css={habitRecordStyle.innerWrapper}>
				<section css={habitRecordStyle.Title}>
					<span>{`${today.getMonth() + 1}월 ${today.getDate()}일`}</span>
					<span>영택님의 실천 기록</span>
				</section>
				<section css={habitRecordStyle.identityWrapper}>
					<span className="subtitle">정체성</span>
					<span className="identity">매일 성장하는 사람</span>
				</section>
				<section css={habitRecordStyle.recordWrapper}>
					<div css={habitRecordStyle.recordHeader}>
						<span>나는</span> <ExclamationMark />
					</div>
					<textarea className="textarea" placeholder="오후 8시에" name="when" />
					<textarea className="textarea" placeholder="우리 집 안 내 책상 위에서" name="where" />
					<textarea className="textarea" placeholder="책 읽기를" name="what" />
					<div className="tail">했다.</div>
				</section>
				<section>
					<div>오늘의 습관 실천을 어떠셨나요?</div>
				</section>
			</main>
		</div>
	);
}

export default HabitRecord;
