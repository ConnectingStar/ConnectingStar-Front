import { useEffect } from "react";

import Gnb from "@/components/common/Gnb/Gnb";
import Header from "@/components/common/Header/Header";
import Chart from "@/components/MyPage/Chart/Chart";

import { getHabitList } from "@/api/habit/habitThunk";
import { useAppDispatch, useAppSelector } from "@/api/hooks";

const ChartPage = () => {
	const dispatch = useAppDispatch();

	const { habitList } = useAppSelector((state) => state.habit);

	useEffect(() => {
		dispatch(getHabitList());
	}, []);

	if (!habitList) {
		return <div />;
	}

	return (
		<>
			<Header>
				<Header.Title hasButton={false}>통계</Header.Title>
			</Header>

			<Chart habitList={habitList} />

			<Gnb />
		</>
	);
};

export default ChartPage;
