import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

// import { useAppSelector, useAppDispatch } from "@/api/hooks";
// import { openModal } from "@/api/modal/modalSlice";
import BlueCheckIcon from "@/assets/icon/ic-homepage-habit-blue-check.svg?react";
import TabIcon from "@/assets/icon/ic-homepage-habit-button.svg?react";
import CheckIcon from "@/assets/icon/ic-homepage-habit-check.svg?react";

import CheckHabitModal from "@/components/Home/CheckHabitModal/CheckHabitModal";
// import HabitModifyModal from "@/components/homepages/ModifyModal/HabitModifyModal";
// import { modalType } from "@/constants/modalConstants";
import { HabitsElement, DateInfo, HabitStatus } from "@/types/homeTypes";

import { habitsStyle } from "@/components/Home/Habits.style";

interface HabitsProps {
	targetDate: DateInfo;
}

function Habits({ targetDate }: HabitsProps) {
	// const navigate = useNavigate();
	// const dispatch = useAppDispatch();
	// const { modal } = useAppSelector((state) => state.modal);
	// CheckModal이 display여부를 표시하는 state
	const [isCheckModal, setIsCheckModal] = useState<boolean>(false);
	// 현재 CheckModal에서 상태를 변경시킬 habit을 targetHabits에서 key를 통해 찾아서 state로 배치
	const [modalTarget, setModalTarget] = useState<HabitsElement | null>(null);
	// habit의 오른쪽 tab을 클릭시에 습관 수정을 할 것인지 묻는 modal을 state로 표시
	// 현재 Calender에서 클릭된 날짜에 해당하는 모든 habits을 가져온 후에 state로 표시
	const [targetHabits, setTargetHabits] = useState<HabitsElement[]>([]);

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

	// habit 왼쪽 CheckIcon을 클릭하면 key를 기준으로 해당 habit을 찾아 modalTarget에 넣고 CheckModal을 표시
	const handleCheck = (key: number) => {
		const target = targetHabits.find((habit) => key === habit.key);
		if (target) {
			setModalTarget(target);
			setIsCheckModal(true);
		}
	};
	// 해당 modalTarget의 상태가 변하면 targetHabits의 내용을 변경시킨 => POST를 통해 변경된 내용을 서버에 보낼 예정
	const handleStatus = (status: HabitStatus) => {
		if (modalTarget) {
			const updatedHabit: HabitsElement = { ...modalTarget, status };
			const targetIdx = targetHabits.findIndex((habit) => updatedHabit.key === habit.key);
			setTargetHabits([
				...targetHabits.slice(0, targetIdx),
				updatedHabit,
				...targetHabits.slice(targetIdx + 1),
			]);
		}
	};
	// 임시 targetHabits 관측용
	return (
		<>
			<CheckHabitModal
				isCheckModal={isCheckModal}
				setIsCheckModal={setIsCheckModal}
				modalTarget={modalTarget || null}
				handleStatus={handleStatus}
			></CheckHabitModal>
			<div css={habitsStyle.container}>
				{targetHabits.map((targetHabit) => {
					return (
						<article
							key={targetHabit.key}
							css={habitsStyle.habitWrapper({ status: targetHabit.status })}
						>
							<div css={habitsStyle.habitInner}>
								<span
									onClick={() => handleCheck(targetHabit.key)}
									css={css`
										width: 2rem;
									`}
								>
									{targetHabit.status === HabitStatus.None && <CheckIcon />}
									{targetHabit.status === HabitStatus.Rest && (
										<span css={habitsStyle.habitRest}>휴식</span>
									)}
									{targetHabit.status === HabitStatus.Checked && <BlueCheckIcon />}
								</span>
								<span css={habitsStyle.habitArticle({ status: targetHabit.status })}>
									{targetHabit.article.length > 80
										? targetHabit.article.slice(0, 80) + "..."
										: targetHabit.article}
								</span>
								<span>
									<TabIcon />
								</span>
							</div>
						</article>
					);
				})}
				<div css={habitsStyle.addButton}>
					<span>+</span>
				</div>
			</div>
		</>
	);
}

export default Habits;
