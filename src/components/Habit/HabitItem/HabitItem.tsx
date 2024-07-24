import WhiteCheckIcon from "@/assets/icon/ic-habit-check.svg?react";
import TabIcon from "@/assets/icon/ic-homepage-habit-button.svg?react";
import CheckIcon from "@/assets/icon/ic-homepage-habit-check.svg?react";

import HabitEditModal from "@/components/Habit/Modal/HabitEditModal/HabitEditModal";
import HabitRecordModal from "@/components/Habit/Modal/HabitRecordModal/HabitRecordModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";

import { habitListItemStyle, habitContentStyle } from "@/pages/HabitPage/HabitPage.style";

import type { HabitRecordOneDayType } from "@/types/habit";

interface HabitItemProps {
	habitData: HabitRecordOneDayType;
	year: number;
	month: number;
	date: number;
}

const HabitItem = ({ habitData, year, month, date }: HabitItemProps) => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	const habit = habitData.status === "COMPLETED" ? habitData.history : habitData.habit;

	const noon = Number(habitData.habit.runTime.split(":")[0]) > 12 ? "오후" : "오전";
	const hour =
		Number(habitData.habit.runTime.split(":")[0]) > 12
			? Number(habitData.habit.runTime.split(":")[0]) - 12
			: Number(habitData.habit.runTime.split(":")[0]);
	const minute = habitData.habit.runTime.split(":")[1];

	console.log(habitData);

	return (
		<div css={habitListItemStyle(habitData.status)}>
			<div onClick={() => dispatch(openModal(modalType.HABIT_RECORD(habitData.habit.runHabitId)))}>
				{habitData.status === "TO_DO" && <CheckIcon />}
				{habitData.status === "COMPLETED" && <WhiteCheckIcon />}
				{habitData.status === "REST" && <span>휴식</span>}
				<div css={habitContentStyle(habitData.status)}>
					<span>{habit.action}</span>
					<div>
						<span>
							{noon} {hour}:{minute}
						</span>
						<div />
						<span>
							{habitData.habit.value} {habitData.habit.unit}
						</span>
					</div>
				</div>
			</div>

			<button onClick={() => dispatch(openModal(modalType.HABIT_EDIT(habitData.habit.runHabitId)))}>
				<TabIcon />
			</button>

			{modal === modalType.HABIT_RECORD(habitData.habit.runHabitId) && (
				<HabitRecordModal
					habitData={habitData.habit}
					year={year}
					month={month}
					date={date}
					noon={noon}
					hour={hour}
					minute={minute}
				/>
			)}

			{modal === modalType.HABIT_EDIT(habitData.habit.runHabitId) && (
				<HabitEditModal habitId={habitData.habit.runHabitId} />
			)}
		</div>
	);
};

export default HabitItem;
