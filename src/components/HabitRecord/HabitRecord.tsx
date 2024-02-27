// import { useState } from "react";

import ExclamationMark from "@/assets/icon/ic-exclamation-mark.svg?react";

import { habitIconData } from "@/constants/myPageConstants";

import { habitRecordStyle } from "@/components/HabitRecord/HabitRecord.style";

function HabitRecord() {
	const today = new Date();
	// const habitConditions = [
	// 	{
	// 		condition: "when",
	// 		placeholder: "오후 8시에",
	// 	},
	// 	{
	// 		condition: "where",
	// 		placeholder: "우리 집 안 내 책상 위에서",
	// 	},
	// 	{
	// 		condition: "what",
	// 		placeholder: "책 읽기를",
	// 	},
	// ];
	// const [habitRecord, setHabitRecord] = useState({
	// 	when: "",
	// 	where: "",
	// 	what: "",
	// });

	// const handleConditionInput = (e) => {
	// 	console.log(e.target.name);
	// };

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

					{/* <textarea
						className="textarea"
						placeholder="오후 8시에"
						name="when"
						onChange={handleConditionInput}
						value={habitRecord.when}
					/>
					<textarea
						className="textarea"
						placeholder="우리 집 안 내 책상 위에서"
						name="where"
						onChange={handleConditionInput}
						value={habitRecord.where}
					/>
					<textarea
						className="textarea"
						placeholder="책 읽기를"
						name="what"
						onChange={handleConditionInput}
						value={habitRecord.what}
					/> */}
					<div css={habitRecordStyle.unitWrapper}>
						<textarea className="textarea unit" />
						<span>단위*</span>
					</div>
					<div className="tail">했다.</div>
				</section>
				<section css={habitRecordStyle.iconWrapper}>
					<div>오늘의 습관 실천을 어떠셨나요?*</div>
					<div className="icons">{habitIconData.map((el) => el.icon)}</div>
				</section>
			</main>
		</div>
	);
}

export default HabitRecord;
