import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MenuButton from "@/components/common/Button/MenuButton/MenuButton";
import ToggleButton from "@/components/common/Button/ToggleButton/ToggleButton";
import AlarmCheckModal from "@/components/Habit/habitManage/AlarmCheckModal/AlarmCheckModal";

import { getHabit } from "@/api/habit/habitThunk";
import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

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
	const { habit } = useAppSelector((state) => state.habit);

	const param = useParams();

	// api로 알람 on,off 여부 받아와서 toggle trigger와 연결
	// const [firstAlarmOn] = useState(true);
	// const [secondAlarmOn] = useState(false);

	const [alarmTarget, setAlarmTarget] = useState("");

	const { isToggle: firstNotiToggle, handleTogglePrev: handleFirstNotiTogglePrev } =
		useToggleTrigger();

	const { isToggle: secondNotiToggle, handleTogglePrev: handleSecondNotiTogglePrev } =
		useToggleTrigger();

	useEffect(() => {
		dispatch(getHabit(Number(param.habitId)));
	}, []);

	if (!habit) {
		return <div />;
	}

	return (
		<main css={layoutStyle}>
			<MenuButton title="정체성" content={habit.identity} />

			<div css={habitMenuBoxStyle}>
				<h3>습관</h3>
				<MenuButton
					title="언제"
					content={`${habit.runTime.noon} ${habit.runTime.hour}시 ${habit.runTime.minute}분`}
				/>
				<MenuButton title="어디서" content={habit.place} />
				<MenuButton title="무엇을" content={habit.behavior} />
				<MenuButton title="얼마나" content={String(habit.behaviorValue)} />
				<MenuButton title="단위" content={habit.behaviorUnit} />
			</div>

			<div css={notiMenuBoxStyle}>
				<span>알림</span>
				<ToggleButton
					title="1차 알림"
					subTitle={`곧 약속 시간이에요 :) 성장하는 ${habit.userNickname}님 화이팅!`}
					alarmTime={`${habit.firstAlert.noon} ${habit.firstAlert.hour}:${habit.firstAlert.minute}`}
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
					alarmTime={`${habit.secondAlert.noon} ${habit.secondAlert.hour}:${habit.secondAlert.minute}`}
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
