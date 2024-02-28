import { useState, ChangeEvent } from "react";

import ExclamationMark from "@/assets/icon/ic-exclamation-mark.svg?react";

import { habitConditions } from "@/constants/habitRecordConstants";
import { habitIconData } from "@/constants/myPageConstants";

import type { HabitCondition } from "@/types/habitRecordTypes";

import {
	identityStyle,
	layoutStyle,
	titleStyle,
	recordStyle,
	iconsStyle,
} from "@/components/Home/HabitRecord/HabitRecord.style";

interface HabitRecordsState {
	when: string;
	where: string;
	what: string;
	[condition: string]: string;
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
		<main css={layoutStyle}>
			<section css={titleStyle}>
				<span>{`${today.getMonth() + 1}월 ${today.getDate()}일`}</span>
				<span>영택님의 실천 기록</span>
			</section>
			<section css={identityStyle}>
				<h1>정체성</h1>
				<span>매일 성장하는 사람</span>
			</section>
			<section css={recordStyle}>
				<div className="header">
					<h1>나는</h1> <ExclamationMark />
				</div>
				{habitConditions.map(({ condition, placeholder }: HabitCondition) => (
					<textarea
						key={condition}
						placeholder={placeholder}
						name={condition}
						onChange={handleConditionInput}
						value={habitRecords[condition]}
					/>
				))}

				<div className="unit">
					<textarea maxLength={4} />
					<span>단위*</span>
				</div>
				<h1>했다.</h1>
			</section>
			<section css={iconsStyle}>
				<h1>오늘의 습관 실천을 어떠셨나요?*</h1>
				<div>{habitIconData.map((el) => el.icon)}</div>
			</section>
		</main>
	);
}

export default HabitRecord;
