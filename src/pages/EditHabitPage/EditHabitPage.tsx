import { useEffect } from "react";
import { useParams } from "react-router-dom";

import EditHabitForm from "@/components/Habit/EditHabitForm/EditHabitForm";

import { getHabit } from "@/api/habit/habitThunk";
import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { getOnlyUserInfo } from "@/api/user/userThunk";

const EditHabitPage = () => {
	const dispatch = useAppDispatch();

	const { habit } = useAppSelector((state) => state.habit);
	const { userInfo } = useAppSelector((state) => state.user);

	const param = useParams();

	useEffect(() => {
		dispatch(getHabit(Number(param.habitId)));
		dispatch(getOnlyUserInfo());
	}, []);

	if (!habit || !userInfo) {
		return <div />;
	}

	return (
		<EditHabitForm habitId={Number(param.habitId)} habit={habit} nickname={userInfo.nickname} />
	);
};

export default EditHabitPage;
