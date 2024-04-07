import { useEffect, useState } from "react";

import AlarmCheckModal from "@/components/Home/habitManage/AlarmCheckModal/AlarmCheckModal";
import Button from "@/components/Home/habitManage/Button/Button";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { habitManageConditions, habitManageAlarms } from "@/constants/homeConstants";
import type { AlarmData } from "@/constants/homeConstants";
import { modalType } from "@/constants/modalConstants";

import {
	layoutStyle,
	conditionStyle,
	quitButtonStyle,
} from "@/components/Home/habitManage/HabitManage.style";

function HabitManage() {
	const dispatch = useAppDispatch();
	const { modal } = useAppSelector((state) => state.modal);
	const [alarmsData, setAlarmsData] = useState<AlarmData[]>(habitManageAlarms);
	const [targetKey, setTargetKey] = useState<number>(0);
	const alarmQuestion = (key: number) => {
		setTargetKey(key);
		dispatch(openModal(modalType.ALARM_CHECK));
	};

	const alarmCheck = (key: number) => {
		const targetIdx = alarmsData.findIndex((alarm) => {
			return alarm.key === key;
		});
		const targetData = alarmsData[targetIdx];
		targetData.isActive = !targetData.isActive;
		setAlarmsData([
			...alarmsData.slice(0, targetIdx),
			targetData,
			...alarmsData.slice(targetIdx + 1),
		]);
	};

	useEffect(() => {
		console.log(alarmsData);
	}, [alarmsData]);

	return (
		<main css={layoutStyle}>
			<div css={conditionStyle}>
				<p>정체성</p>
				<p>성장하는</p>
			</div>
			<div>
				<span>습관</span>
				{habitManageConditions.map((condition) => (
					<div key={condition.title} css={conditionStyle}>
						<p>{condition.title}</p>
						<p>{condition.input}</p>
					</div>
				))}
			</div>
			<div>
				<span>알림</span>
				{alarmsData.map((inputs) => (
					<Button inputs={inputs} isToggle alarmCheck={alarmCheck} alarmQuestion={alarmQuestion} />
				))}
			</div>
			<button css={quitButtonStyle}>습관 그만두기</button>
			{modal === modalType.ALARM_CHECK && (
				<AlarmCheckModal targetKey={targetKey} alarmCheck={alarmCheck} />
			)}
		</main>
	);
}

export default HabitManage;
