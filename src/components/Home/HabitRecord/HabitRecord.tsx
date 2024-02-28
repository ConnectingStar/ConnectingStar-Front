import { useState, ChangeEvent } from "react";

import ExclamationMark from "@/assets/icon/ic-exclamation-mark.svg?react";

import { HabitCondition } from "@/types/habitRecordTypes";

import { habitConditions } from "@/constants/habitRecordConstants";
import { habitIconData } from "@/constants/myPageConstants";

import { habitRecordStyle } from "@/components/Home/HabitRecord/HabitRecord.style";

interface HabitRecordsState {
	when: string;
	where: string;
	what: string;
}

function HabitRecord() {
	const today = new Date();

	const [habitRecords, setHabitRecords] = useState<HabitRecordsState>({
		when: "",
		where: "",
		what: "",
	});

	const handleConditionInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setHabitRecords({
			...habitRecords,
			[name]: value,
		});
	};

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
					{habitConditions.map((el: HabitCondition) => {
						const { condition, placeholder } = el;
						return (
							<textarea
								className="textarea"
								key={condition}
								placeholder={placeholder}
								name={condition}
								onChange={handleConditionInput}
								// value={habitRecords[condition]}
							/>
						);
					})}

					<div css={habitRecordStyle.unitWrapper}>
						<textarea className="textarea unit" maxLength={4} />
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
