import { useState } from "react";

import MenuButton from "@/components/common/Button/MenuButton/MenuButton";
import AlarmCheckModal from "@/components/Home/habitManage/AlarmCheckModal/AlarmCheckModal";
import Button from "@/components/Home/habitManage/Button/Button";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { HABIT_DATA, habitManageAlarms } from "@/constants/homeConstants";
import type { AlarmData } from "@/constants/homeConstants";
import { modalType } from "@/constants/modalConstants";

import {
	layoutStyle,
	habitMenuBoxStyle,
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

	return (
		<main css={layoutStyle}>
			<MenuButton title="정체성" content="성장하는" />

			<div css={habitMenuBoxStyle}>
				<h3>습관</h3>
				{HABIT_DATA.map((habitData) => (
					<MenuButton title={habitData.title} content={habitData.content} />
				))}
			</div>

			<div>
				<span>알림</span>
				{alarmsData.map((inputs, idx) => (
					<Button
						key={idx}
						inputs={inputs}
						isToggle
						alarmCheck={alarmCheck}
						alarmQuestion={alarmQuestion}
					/>
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
