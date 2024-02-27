import { useEffect, useState } from "react";

import BlueCheckIcon from "@/assets/icon/ic-homepage-habit-blue-check.svg?react";
import TabIcon from "@/assets/icon/ic-homepage-habit-button.svg?react";
import CheckIcon from "@/assets/icon/ic-homepage-habit-check.svg?react";

import HabitCheckModal from "@/components/Home/HabitCheckModal/HabitCheckModal";
import HabitModifyModal from "@/components/Home/HabitModifyModal/HabitModifyModal";
import { HabitsElement, DateInfo, HabitStatus } from "@/types/homeTypes";

import { useAppSelector, useAppDispatch } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";

import { habitsStyle } from "@/components/Home/Habits.style";

interface HabitsProps {
	targetDate: DateInfo;
}

function Habits({ targetDate }: HabitsProps) {
	const { HABIT_CHECK_MODAL, HABIT_MODIFY_MODAL } = modalType;
	// const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { modal } = useAppSelector((state) => state.modal);
	// 현재 CheckModal에서 상태를 변경시킬 habit을 targetHabits에서 key를 통해 찾아서 state로 배치
	const [targetHabits, setTargetHabits] = useState<HabitsElement[]>([]);
	const [modalTarget, setModalTarget] = useState<HabitsElement | null>(null);

	useEffect(() => {
		// 가져오면 표기될 것들
		setTargetHabits([
			{
				key: 1,
				status: HabitStatus.None,
				article: "기본 설정",
			},
		]);
	}, [targetDate]);

	const handleHabit = (key: number, currentModalType: string) => {
		console.log(currentModalType);
		const target = targetHabits.find((habit) => key === habit.key);
		if (target) {
			dispatch(openModal(currentModalType));
			setModalTarget(target);
		}
	};
	return (
		<>
			{modal === modalType.HABIT_MODIFY_MODAL && <HabitModifyModal modalTarget={modalTarget} />}
			{modal === modalType.HABIT_CHECK_MODAL && <HabitCheckModal modalTarget={modalTarget} />}
			<div css={habitsStyle.container}>
				{targetHabits.map((targetHabit) => (
					<article
						key={targetHabit.key}
						css={habitsStyle.habitWrapper({ status: targetHabit.status })}
					>
						<div className="targetHabit">
							<span
								className="status"
								onClick={() => handleHabit(targetHabit.key, HABIT_CHECK_MODAL)}
							>
								{targetHabit.status === HabitStatus.None && <CheckIcon />}
								{targetHabit.status === HabitStatus.Rest && (
									<span css={habitsStyle.habitRest}>휴식</span>
								)}
								{targetHabit.status === HabitStatus.Checked && <BlueCheckIcon />}
							</span>
							<span
								onClick={() => handleHabit(targetHabit.key, HABIT_CHECK_MODAL)}
								css={habitsStyle.habitArticle({ status: targetHabit.status })}
							>
								{targetHabit.article.length > 80
									? targetHabit.article.slice(0, 80) + "..."
									: targetHabit.article}
							</span>
							<span onClick={() => handleHabit(targetHabit.key, HABIT_MODIFY_MODAL)}>
								<TabIcon />
							</span>
						</div>
					</article>
				))}
				<div css={habitsStyle.addButton}>
					<span>+</span>
				</div>
			</div>
		</>
	);
}

export default Habits;
