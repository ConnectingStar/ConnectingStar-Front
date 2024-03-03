import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { css } from "@emotion/react";

import BlueCheckIcon from "@/assets/icon/ic-homepage-habit-blue-check.svg?react";
import TabIcon from "@/assets/icon/ic-homepage-habit-button.svg?react";
import CheckIcon from "@/assets/icon/ic-homepage-habit-check.svg?react";

import CheckHabitModal from "@/components/homepages/CheckHabitModal/CheckHabitModal";
import ModifyModal from "@/components/homepages/ModifyModal/ModifyModal";

import { habitsStyle } from "@/components/homepages/Habits.style";

interface HabitsProps {
	targetDate: {
		year: number;
		month: number;
		date: number;
		day: string;
		isPlanned: boolean;
	};
}
enum Status {
	None = "none",
	Rest = "rest",
	Checked = "checked",
}
export interface HabitsElement {
	key: number;
	status: Status;
	article: string;
}

function Habits({ targetDate }: HabitsProps) {
	const navigate = useNavigate();
	// CheckModal이 display여부를 표시하는 state
	const [isCheckModal, setIsCheckModal] = useState<boolean>(false);
	// 현재 CheckModal에서 상태를 변경시킬 habit을 targetHabits에서 key를 통해 찾아서 state로 배치
	const [modalTarget, setModalTarget] = useState<HabitsElement | null>(null);
	// habit의 오른쪽 tab을 클릭시에 습관 수정을 할 것인지 묻는 modal을 state로 표시
	const [isModifyModal, setIsModifyModal] = useState<boolean>(false);
	// 현재 Calender에서 클릭된 날짜에 해당하는 모든 habits을 가져온 후에 state로 표시
	const [targetHabits, setTargetHabits] = useState<HabitsElement[]>([]);

	// targetDate가 변하면 해당하는 날짜의 habits들을 가져와서 setTargetHabits에 표시
	useEffect(() => {
		const url = `http://localhost:3000/habits?id=${targetDate.year}.${targetDate.month}.${targetDate.date}`;
		axios
			.get(url)
			.then((res) => {
				if (res.data[0]) {
					setTargetHabits(res.data[0].articles);
				} else {
					setTargetHabits([]);
				}
			})
			.catch((err) => {
				console.error(err);
			});
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
	const handleStatus = (status: Status) => {
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
	useEffect(() => {
		console.log(targetHabits);
	}, [targetHabits]);

	return (
		<>
			<ModifyModal isModifyModal={isModifyModal} setIsModifyModal={setIsModifyModal} />
			<CheckHabitModal
				isCheckModal={isCheckModal}
				setIsCheckModal={setIsCheckModal}
				modalTarget={modalTarget || null}
				handleStatus={handleStatus}
			></CheckHabitModal>
			<div css={habitsStyle.container}>
				{targetHabits.map((targetHabit) => {
					return (
						<article css={habitsStyle.habitWrapper({ status: targetHabit.status })}>
							<div css={habitsStyle.habitInner}>
								<span
									onClick={() => handleCheck(targetHabit.key)}
									css={css`
										width: 2rem;
									`}
								>
									{targetHabit.status === "none" && <CheckIcon />}
									{targetHabit.status === "rest" && <span css={habitsStyle.habitRest}>휴식</span>}
									{targetHabit.status === "checked" && <BlueCheckIcon />}
								</span>
								<span css={habitsStyle.habitArticle({ status: targetHabit.status })}>
									{targetHabit.article.length > 80
										? targetHabit.article.slice(0, 80) + "..."
										: targetHabit.article}
								</span>
								<span onClick={() => setIsModifyModal(true)}>
									<TabIcon />
								</span>
							</div>
						</article>
					);
				})}
				<div
					css={habitsStyle.addButton}
					onClick={() => {
						// 임시 주소
						navigate("/generateHabit");
					}}
				>
					<span>+</span>
				</div>
			</div>
		</>
	);
}

export default Habits;
