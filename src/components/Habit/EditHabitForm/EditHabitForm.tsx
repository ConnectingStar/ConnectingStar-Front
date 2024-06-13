import { useState } from "react";

import BehaviorModal from "@/components/Chatting/BehaviorModal";
import MenuButton from "@/components/common/Button/MenuButton/MenuButton";
import ToggleButton from "@/components/common/Button/ToggleButton/ToggleButton";
import Header from "@/components/common/Header/Header";
import LocationModal from "@/components/common/Modal/CommonModal/LocationModal/LocationModal";
import SelectTagModal from "@/components/common/Modal/CommonModal/SelectTagModal/SelectTagModal";
import SelectTimeModal from "@/components/common/Modal/CommonModal/SelectTimeModal/SelectTimeModal";
import AlarmCheckModal from "@/components/Habit/Modal/AlarmCheckModal/AlarmCheckModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { SELECT_TAG_DATA } from "@/constants/modalConstants";
import { modalType } from "@/constants/modalConstants";

import { useHabitForm } from "@/hooks/useHabitForm";
import { useToggleTrigger } from "@/hooks/useToggleTrigger";

import {
	layoutStyle,
	habitMenuBoxStyle,
	notiMenuBoxStyle,
	quitButtonStyle,
} from "@/pages/EditHabitPage/EditHabitPage.style";

import type { HabitType } from "@/types/habit";

interface EditHabitFormProps {
	habitId: number;
	habit: HabitType;
}

const EditHabitForm = ({ habitId, habit }: EditHabitFormProps) => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	const {
		identity,
		runTime,
		place,
		behavior,
		behaviorValue,
		behaviorUnit,
		firstAlert,
		secondAlert,
	} = habit;

	// api로 알람 on,off 여부 받아와서 toggle trigger와 연결
	// const [firstAlarmOn] = useState(true);
	// const [secondAlarmOn] = useState(false);

	const { isToggle: firstNotiToggle, handleTogglePrev: handleFirstNotiTogglePrev } =
		useToggleTrigger();

	const { isToggle: secondNotiToggle, handleTogglePrev: handleSecondNotiTogglePrev } =
		useToggleTrigger();

	const [alarmTarget, setAlarmTarget] = useState("");

	const { habitRequest, updateInputValue, handleSubmit } = useHabitForm({
		habitId,
		initialData: {
			runHabitId: habitId,
			identity,
			runTime,
			place,
			behavior,
			behaviorValue,
			behaviorUnit,
			firstAlert,
			secondAlert,
		},
	});

	return (
		<>
			<Header>
				<Header.CloseButton />
				<Header.Title>습관관리</Header.Title>
				<Header.TextButton onClick={handleSubmit}>완료</Header.TextButton>
			</Header>
			<main css={layoutStyle}>
				<MenuButton
					title="정체성"
					content={habitRequest.identity}
					onClick={() => dispatch(openModal(modalType.SELECT_IDENTITY))}
				/>

				<div css={habitMenuBoxStyle}>
					<h3>습관</h3>
					<MenuButton
						title="언제"
						content={`${habitRequest.runTime.noon} ${habitRequest.runTime.hour}시 ${habitRequest.runTime.minute}분`}
					/>
					<MenuButton
						title="어디서"
						content={habitRequest.place}
						onClick={() => dispatch(openModal(modalType.SELECT_PLACE))}
					/>
					<MenuButton
						title="무엇을"
						content={habitRequest.behavior}
						onClick={() => dispatch(openModal(modalType.SELECT_BEHAVIOR))}
					/>
					<MenuButton
						title="얼마나"
						content={String(habitRequest.behaviorValue)}
						onClick={() => dispatch(openModal(modalType.SELECT_BEHAVIORUNIT))}
					/>
					<MenuButton title="단위" content={habitRequest.behaviorUnit} />
				</div>

				<div css={notiMenuBoxStyle}>
					<span>알림</span>
					<ToggleButton
						title="1차 알림"
						subTitle={`곧 약속 시간이에요 :) 성장하는 ${habit.userNickname}님 화이팅!`}
						alarmTime={`${habitRequest.firstAlert.noon} ${habitRequest.firstAlert.hour}:${habitRequest.firstAlert.minute}`}
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
						alarmTime={`${habitRequest.secondAlert.noon} ${habitRequest.secondAlert.hour}:${habitRequest.secondAlert.minute}`}
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

				{modal === modalType.SELECT_IDENTITY && (
					<SelectTagModal
						title="어떤 사람이 되고 싶으세요?"
						tags={SELECT_TAG_DATA.identityTags}
						updateInputValue={updateInputValue}
					/>
				)}
				{modal === modalType.SELECT_TIME("RUNTIME") && (
					<SelectTimeModal title="시간을 선택해 주세요" updateInputValue={updateInputValue} />
				)}
				{modal == modalType.SELECT_TIME("FIRSTALERT") && (
					<SelectTimeModal
						title="1차 알림시간을 선택해 주세요"
						updateInputValue={updateInputValue}
					/>
				)}
				{modal == modalType.SELECT_TIME("SECONDALERT") && (
					<SelectTimeModal
						title="2차 알림시간을 선택해 주세요"
						updateInputValue={updateInputValue}
					/>
				)}
				{modal === modalType.SELECT_PLACE && <LocationModal updateInputValue={updateInputValue} />}
				{modal === modalType.SELECT_BEHAVIOR && (
					<SelectTagModal
						title="어떤 습관을 만들어 볼까요?"
						tags={SELECT_TAG_DATA.habitTags}
						updateInputValue={updateInputValue}
					/>
				)}
				{modal === modalType.SELECT_BEHAVIORUNIT && (
					<BehaviorModal
						behavior={habitRequest.behavior}
						prevValue={habitRequest.behaviorValue}
						prevUnit={habitRequest.behaviorUnit}
						updateInputValue={updateInputValue}
					/>
				)}
			</main>
		</>
	);
};

export default EditHabitForm;
