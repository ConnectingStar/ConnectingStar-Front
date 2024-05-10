import { useState } from "react";

import MenuButton from "@/components/common/Button/MenuButton/MenuButton";
import ToggleButton from "@/components/common/Button/ToggleButton/ToggleButton";
import AlarmCheckModal from "@/components/Home/habitManage/AlarmCheckModal/AlarmCheckModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { HABIT_DATA, habitManageAlarms } from "@/constants/homeConstants";
import type { AlarmData } from "@/constants/homeConstants";
import { modalType } from "@/constants/modalConstants";

import { useToggleTrigger } from "@/hooks/useToggleTrigger";

import {
	layoutStyle,
	habitMenuBoxStyle,
	notiMenuBoxStyle,
	quitButtonStyle,
} from "@/components/Home/habitManage/HabitManage.style";

function HabitManage() {
	const dispatch = useAppDispatch();
	const { modal } = useAppSelector((state) => state.modal);

	const [firstAlarmTime] = useState("오후 7:50");
	const [secondAlarmTime] = useState("오후 8:30");

	const [alarmsData, setAlarmsData] = useState<AlarmData[]>(habitManageAlarms);
	const targetKey = 0;

	const { isToggle: firstNotiToggle, handleTogglePrev: handleFirstNotiTogglePrev } =
		useToggleTrigger();

	const { isToggle: secondNotiToggle, handleTogglePrev: handleSecondNotiTogglePrev } =
		useToggleTrigger();

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

			<div css={notiMenuBoxStyle}>
				<span>알림</span>
				<ToggleButton
					title="1차 알림"
					subTitle="곧 약속 시간이에요 :) 성장하는 세림님 화이팅!"
					alarmTime={firstAlarmTime}
					hasToggle
					isToggle={firstNotiToggle}
					onClick={() => dispatch(openModal(modalType.ALARM_CHECK))}
					handleTogglePrev={handleFirstNotiTogglePrev}
				/>
				<ToggleButton
					title="2차 알림"
					subTitle="오늘의 실천 결과는 어땠나요? 기록을 남기고 별 받아 가세요!"
					alarmTime={secondAlarmTime}
					hasToggle
					isToggle={secondNotiToggle}
					onClick={() => dispatch(openModal(modalType.ALARM_CHECK))}
					handleTogglePrev={handleSecondNotiTogglePrev}
				/>
			</div>
			<button css={quitButtonStyle}>습관 그만두기</button>
			{modal === modalType.ALARM_CHECK && (
				<AlarmCheckModal targetKey={targetKey} alarmCheck={alarmCheck} />
			)}
		</main>
	);
}

export default HabitManage;
