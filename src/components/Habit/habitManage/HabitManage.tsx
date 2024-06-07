import { useState } from "react";

import MenuButton from "@/components/common/Button/MenuButton/MenuButton";
import ToggleButton from "@/components/common/Button/ToggleButton/ToggleButton";
import AlarmCheckModal from "@/components/Habit/habitManage/AlarmCheckModal/AlarmCheckModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { HABIT_DATA } from "@/constants/homeConstants";
import { modalType } from "@/constants/modalConstants";

import { useToggleTrigger } from "@/hooks/useToggleTrigger";

import {
	layoutStyle,
	habitMenuBoxStyle,
	notiMenuBoxStyle,
	quitButtonStyle,
} from "@/components/Habit/habitManage/HabitManage.style";

function HabitManage() {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	const [firstAlarmTime] = useState("오후 7:50");
	const [secondAlarmTime] = useState("오후 8:30");

	// api로 알람 on,off 여부 받아와서 toggle trigger와 연결
	// const [firstAlarmOn] = useState(true);
	// const [secondAlarmOn] = useState(false);

	const [alarmTarget, setAlarmTarget] = useState("");

	const { isToggle: firstNotiToggle, handleTogglePrev: handleFirstNotiTogglePrev } =
		useToggleTrigger();

	const { isToggle: secondNotiToggle, handleTogglePrev: handleSecondNotiTogglePrev } =
		useToggleTrigger();

	return (
		<main css={layoutStyle}>
			<MenuButton title="정체성" content="성장하는" />

			<div css={habitMenuBoxStyle}>
				<h3>습관</h3>
				{HABIT_DATA.map((habitData) => (
					<MenuButton key={habitData.title} title={habitData.title} content={habitData.content} />
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
					onClick={() => {
						setAlarmTarget("first");
						dispatch(openModal(modalType.ALARM_CHECK));
					}}
					handleTogglePrev={handleFirstNotiTogglePrev}
				/>
				<ToggleButton
					title="2차 알림"
					subTitle="오늘의 실천 결과는 어땠나요? 기록을 남기고 별 받아 가세요!"
					alarmTime={secondAlarmTime}
					hasToggle
					isToggle={secondNotiToggle}
					onClick={() => {
						setAlarmTarget("second");
						dispatch(openModal(modalType.ALARM_CHECK));
					}}
					handleTogglePrev={handleSecondNotiTogglePrev}
				/>
			</div>
			<button css={quitButtonStyle}>습관 그만두기</button>
			{modal === modalType.ALARM_CHECK && <AlarmCheckModal alarmTarget={alarmTarget} />}
		</main>
	);
}

export default HabitManage;
