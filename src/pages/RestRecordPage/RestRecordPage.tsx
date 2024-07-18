import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "@/components/common/Header/Header";
import RestRecord from "@/components/Habit/RestRecord/RestRecord";

import { getHabit } from "@/api/habit/habitThunk";
import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { getUserInfo } from "@/api/user/userThunk";

import { PATH } from "@/constants/path";

const RestRecordPage = () => {
	const dispatch = useAppDispatch();

	const { habit } = useAppSelector((state) => state.habit);
	const { userData } = useAppSelector((state) => state.user);

	const params = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getUserInfo());
		dispatch(getHabit(Number(params.habitId)));
	}, []);

	if (!habit || !userData) {
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
			<RestRecord habitData={habit} identity={userData.identity} nickname={userData.nickname} />
		</>
	);
};

export default RestRecordPage;
