import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
			<EditHabitForm habitId={Number(param.habitId)} habit={habit} />
		</>
	);
};

export default EditHabitPage;
