import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "@/components/common/Header/Header";
import PracticeRecord from "@/components/Habit/PracticeRecord/PracticeRecord";

import { getHabit } from "@/api/habit/habitThunk";
import { useAppDispatch, useAppSelector } from "@/api/hooks";

import { PATH } from "@/constants/path";

const PracticeRecordPage = () => {
	const dispatch = useAppDispatch();

	const { habit, isHabitLoading } = useAppSelector((state) => state.habit);

	const navigate = useNavigate();

	const params = useParams();

	useEffect(() => {
		dispatch(getHabit(Number(params.habitId)));
	}, [params.habitId]);

	if (!habit) {
		return <div />;
	}

	return (
		<>
			<Header>
				<Header.PrevButton />
				<Header.TextButton onClick={() => navigate(PATH.EDIT_HABIT(params.habitId))}>
					관리
				</Header.TextButton>
			</Header>
			{isHabitLoading === false && <PracticeRecord habitData={habit} />}
		</>
	);
};

export default PracticeRecordPage;
