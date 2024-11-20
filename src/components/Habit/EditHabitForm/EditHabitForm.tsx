import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
import { PATH } from "@/constants/path";

import { useHabitForm } from "@/hooks/useHabitForm";
import { useToast } from "@/hooks/useToast";
import { useToggleTrigger } from "@/hooks/useToggleTrigger";

import { convertFromTimeString } from "@/utils/time";

import {
	layoutStyle,
	habitMenuBoxStyle,
	notiMenuBoxStyle,
	quitButtonStyle,
} from "@/pages/EditHabitPage/EditHabitPage.style";

import type { HabitV2Type } from "@/types/habit";

interface EditHabitFormProps {
	habitId: number;
	habit: HabitV2Type;
	nickname: string;
}

const EditHabitForm = ({ habitId, habit, nickname }: EditHabitFormProps) => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	const navigate = useNavigate();

	const params = useParams();

	const { createToast } = useToast();

	const { identity, runTime, place, action, value, unit } = habit;

	const [firstAlertStatus] = useState(habit.habitAlerts[0].alertStatus);
	const [secondAlertStatus] = useState(habit.habitAlerts[1].alertStatus);

	const firstAlert = habit.habitAlerts[0].alertTime;
	const secondAlert = habit.habitAlerts[1].alertTime;

	const { habitRequest, updateInputValue, handleSubmit } = useHabitForm({
		habitId: String(habitId),
		initialData: {
			identity,
			runTime,
			place,
			action,
			value,
			unit,
			firstAlert,
			secondAlert,
			firstAlertStatus: String(firstAlertStatus),
			secondAlertStatus: String(secondAlertStatus),
		},
	});

	const { isToggle: firstNotiToggle, handleTogglePrev: handleFirstNotiTogglePrev } =
		useToggleTrigger({
			toggle: firstAlertStatus,
			updateInputValue,
			isFirst: true,
		});

	const { isToggle: secondNotiToggle, handleTogglePrev: handleSecondNotiTogglePrev } =
		useToggleTrigger({
			toggle: secondAlertStatus,
			updateInputValue,
		});

	const [alarmTarget, setAlarmTarget] = useState("");

	return (
		<>
			<Header>
				<Header.CloseButton />
				<Header.Title>습관관리</Header.Title>
				<Header.TextButton
					onClick={() => {
						handleSubmit();
						createToast("습관 약속을 수정했어요👌");
					}}
				>
					완료
				</Header.TextButton>
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
						content={convertFromTimeString(habitRequest.runTime)}
						onClick={() => dispatch(openModal(modalType.SELECT_TIME("RUNTIME")))}
					/>
					<MenuButton
						title="어디서"
						content={habitRequest.place}
						onClick={() => dispatch(openModal(modalType.SELECT_PLACE))}
					/>
					<MenuButton
						title="무엇을"
						content={habitRequest.action}
						onClick={() => dispatch(openModal(modalType.SELECT_BEHAVIOR))}
					/>
					<MenuButton
						title="얼마나"
						content={String(habitRequest.value)}
						onClick={() => dispatch(openModal(modalType.SELECT_BEHAVIORUNIT))}
					/>
					<MenuButton
						title="단위"
						content={habitRequest.unit}
						onClick={() => dispatch(openModal(modalType.SELECT_BEHAVIORUNIT))}
					/>
				</div>

				<div css={notiMenuBoxStyle}>
					<h3>알림</h3>
					<ToggleButton
						title="1차 알림"
						subTitle={`곧 약속 시간이에요 :) 성장하는 ${nickname}님 화이팅!`}
						alarmTime={convertFromTimeString(habitRequest.firstAlert)}
						hasToggle
						isToggle={firstNotiToggle}
						onClick={() => {
							setAlarmTarget("first");
							dispatch(openModal(modalType.ALARM_CHECK));
						}}
						onTimeClick={() => dispatch(openModal(modalType.SELECT_TIME("FIRSTALERT")))}
						handleTogglePrev={handleFirstNotiTogglePrev}
					/>
					<ToggleButton
						title="2차 알림"
						subTitle="오늘의 실천 결과는 어땠나요? 기록을 남기고 별 받아 가세요!"
						alarmTime={convertFromTimeString(habitRequest.secondAlert)}
						hasToggle
						isToggle={secondNotiToggle}
						onClick={() => {
							setAlarmTarget("second");
							dispatch(openModal(modalType.ALARM_CHECK));
						}}
						onTimeClick={() => dispatch(openModal(modalType.SELECT_TIME("SECONDALERT")))}
						handleTogglePrev={handleSecondNotiTogglePrev}
					/>
				</div>
				<button css={quitButtonStyle} onClick={() => navigate(PATH.DELETE_HABIT(params.habitId))}>
					습관 그만두기
				</button>

				{modal === modalType.ALARM_CHECK && <AlarmCheckModal alarmTarget={alarmTarget} />}

				{modal === modalType.SELECT_IDENTITY && (
					<SelectTagModal
						type="identity"
						tags={SELECT_TAG_DATA.identityTags}
						prevValue={habitRequest.identity}
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
						runTime={habitRequest.runTime}
					/>
				)}
				{modal == modalType.SELECT_TIME("SECONDALERT") && (
					<SelectTimeModal
						title="2차 알림시간을 선택해 주세요"
						updateInputValue={updateInputValue}
						runTime={habitRequest.runTime}
					/>
				)}
				{modal === modalType.SELECT_PLACE && (
					<LocationModal prevValue={habitRequest.place} updateInputValue={updateInputValue} />
				)}
				{modal === modalType.SELECT_BEHAVIOR && (
					<SelectTagModal
						type="behavior"
						tags={SELECT_TAG_DATA.behaviorTags}
						prevValue={habitRequest.action}
						updateInputValue={updateInputValue}
					/>
				)}
				{modal === modalType.SELECT_BEHAVIORUNIT && (
					<BehaviorModal
						behavior={habitRequest.action}
						prevValue={habitRequest.value}
						prevUnit={habitRequest.unit}
						updateInputValue={updateInputValue}
					/>
				)}
			</main>
		</>
	);
};

export default EditHabitForm;
