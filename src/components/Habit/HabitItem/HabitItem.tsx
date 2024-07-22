import { useNavigate } from "react-router-dom";

import WhiteCheckIcon from "@/assets/icon/ic-habit-check.svg?react";
import TabIcon from "@/assets/icon/ic-homepage-habit-button.svg?react";
import CheckIcon from "@/assets/icon/ic-homepage-habit-check.svg?react";

import HabitEditModal from "@/components/Habit/Modal/HabitEditModal/HabitEditModal";
import HabitRecordModal from "@/components/Habit/Modal/HabitRecordModal/HabitRecordModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";
import { PATH } from "@/constants/path";

import type { HabitRecordOneDayType } from "@/types/habit";

import {
	habitListItemStyle,
	habitContentStyle,
} from "@/components/Habit/HabitItem/HabitItem.style";

interface HabitItemProps {
	habitData: HabitRecordOneDayType;
	year: number;
	month: number;
	date: number;
}

const HabitItem = ({ habitData, year, month, date }: HabitItemProps) => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	const navigate = useNavigate();

	const isHabitHistory = habitData.status === "COMPLETED";

	const habit = isHabitHistory ? habitData.history : habitData.habit;

	const originalNoon = isHabitHistory
		? habitData.history.runDate.split("T")[1].split(":")[0]
		: habitData.habit.runTime.split(":")[0];
	const originalHour = isHabitHistory
		? habitData.history.runDate.split("T")[1].split(":")[0]
		: habitData.habit.runTime.split(":")[0];

	const noon = Number(habitData.habit.runTime.split(":")[0]) > 12 ? "오후" : "오전";
	const hour =
		Number(originalNoon) > 12
			? Number(originalHour) - 12
			: Number(habitData.habit.runTime.split(":")[0]);
	const minute = isHabitHistory
		? habitData.history.runDate.split("T")[1].split(":")[1]
		: habitData.habit.runTime.split(":")[1];

	const value = isHabitHistory ? habitData.history.runValue : habitData.habit.value;

	return (
		<div css={habitListItemStyle(habitData.status)}>
			<div
				onClick={() =>
					habitData.status === "TO_DO"
						? dispatch(openModal(modalType.HABIT_RECORD(habitData.habit.runHabitId)))
						: navigate(PATH.HABIT_RECORD(Number(habitData.habit.runHabitId), year, month, date))
				}
			>
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
							{value} {habitData.habit.unit}
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
