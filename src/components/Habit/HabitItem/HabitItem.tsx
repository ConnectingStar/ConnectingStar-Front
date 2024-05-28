import BlueCheckIcon from "@/assets/icon/ic-homepage-habit-blue-check.svg?react";
import TabIcon from "@/assets/icon/ic-homepage-habit-button.svg?react";
import CheckIcon from "@/assets/icon/ic-homepage-habit-check.svg?react";

import HabitEditModal from "@/components/Habit/Modal/HabitEditModal/HabitEditModal";
import HabitRecordModal from "@/components/Habit/Modal/HabitRecordModal/HabitRecordModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";

import { habitArticleStyle } from "@/pages/HabitPage/HabitPage.style";

interface HabitItemProps {
	habitId: number;
	habitState?: "progress" | "complete" | "rest" | "end";
	habitText: string;
}

const HabitItem = ({ habitId, habitState, habitText }: HabitItemProps) => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	return (
		<div css={habitArticleStyle(habitState)}>
			<div onClick={() => dispatch(openModal(modalType.HABIT_RECORD(habitId)))}>
				{habitState === "progress" && <CheckIcon />}
				{habitState === "complete" && <BlueCheckIcon />}
				{habitState === "rest" && <span>휴식</span>}
				<p>{habitText}</p>
			</div>

			<button onClick={() => dispatch(openModal(modalType.HABIT_EDIT))}>
				<TabIcon />
			</button>

			{modal === modalType.HABIT_RECORD(habitId) && <HabitRecordModal text={habitText} />}

			{modal === modalType.HABIT_EDIT && <HabitEditModal />}
		</div>
	);
};

export default HabitItem;
