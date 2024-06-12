import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "@/components/common/Header/Header";
import EditHabitForm from "@/components/Habit/EditHabitForm/EditHabitForm";

import { getHabit } from "@/api/habit/habitThunk";
import { useAppDispatch, useAppSelector } from "@/api/hooks";

const EditHabitPage = () => {
	const dispatch = useAppDispatch();

	const { habit } = useAppSelector((state) => state.habit);

	const param = useParams();

	useEffect(() => {
		dispatch(getHabit(Number(param.habitId)));
	}, []);

	if (!habit) {
		return <div />;
	}

	return (
		<>
			<Header>
				<Header.CloseButton />
				<Header.Title>습관관리</Header.Title>
				<Header.TextButton>완료</Header.TextButton>
			</Header>
			<EditHabitForm habitId={Number(param.habitId)} habit={habit} />
		</>
	);
};

export default EditHabitPage;
