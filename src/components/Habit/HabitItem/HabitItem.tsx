import WhiteCheckIcon from "@/assets/icon/ic-habit-check.svg?react";
import TabIcon from "@/assets/icon/ic-homepage-habit-button.svg?react";
import CheckIcon from "@/assets/icon/ic-homepage-habit-check.svg?react";

import HabitEditModal from "@/components/Habit/Modal/HabitEditModal/HabitEditModal";
import HabitRecordModal from "@/components/Habit/Modal/HabitRecordModal/HabitRecordModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";

import { habitListItemStyle, habitContentStyle } from "@/pages/HabitPage/HabitPage.style";

import type { HabitType } from "@/types/habit";

interface HabitItemProps {
	habitState?: "progress" | "complete" | "rest" | "end";
	habitData: HabitType;
}

const HabitItem = ({ habitState, habitData }: HabitItemProps) => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	return (
		<div css={habitListItemStyle(habitState)}>
			<div onClick={() => dispatch(openModal(modalType.HABIT_RECORD(habitData.runHabitId)))}>
				{habitState === "progress" && <CheckIcon />}
				{habitState === "complete" && <WhiteCheckIcon />}
				{habitState === "rest" && <span>휴식</span>}
				<div css={habitContentStyle(habitState)}>
					<span>{habitData.behavior}</span>
					<div>
						<span>
							{habitData.runTime.noon} {habitData.runTime.hour}:{habitData.runTime.minute}
						</span>
						<div />
						<span>
							{habitData.behaviorValue} {habitData.behaviorUnit}
						</span>
					</div>
				</div>
			</div>

			<button onClick={() => dispatch(openModal(modalType.HABIT_EDIT(habitData.runHabitId)))}>
				<TabIcon />
			</button>

			{modal === modalType.HABIT_RECORD(habitData.runHabitId) && (
				<HabitRecordModal text={habitData.behavior} habitId={habitData.runHabitId} />
			)}

			{modal === modalType.HABIT_EDIT(habitData.runHabitId) && (
				<HabitEditModal habitId={habitData.runHabitId} />
			)}
		</div>
	);
};

export default HabitItem;
