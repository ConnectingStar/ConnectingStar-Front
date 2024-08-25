import { useEffect } from "react";

import Header from "@/components/common/Header/Header";
import StarTrace from "@/components/MyPage/StarTrace/StarTrace";

import { getHabitList } from "@/api/habit/habitThunk";
import { useAppDispatch, useAppSelector } from "@/api/hooks";

const MyStarTracePage = () => {
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
				<Header.PrevButton />
				<Header.Title>나의 별자취</Header.Title>
			</Header>
			<StarTrace habitList={habitList} />
		</>
	);
};

export default MyStarTracePage;
