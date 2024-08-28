import { useEffect, useState } from "react";

import ButtonCarousel from "@/components/common/ButtonCarousel/ButtonCarousel";
import Content from "@/components/MyPage/StarTrace/Content";
import SortButton from "@/components/MyPage/StarTrace/SortButton";

import { getHabitRecordList } from "@/api/habit/habitThunk";
import { useAppDispatch, useAppSelector } from "@/api/hooks";

import { dateFormat, weekFormat } from "@/utils/dateFormat";
import { convertFromTimeString } from "@/utils/time";

import type { HabitOneDayType } from "@/types/habit";

import { layoutStyle } from "@/components/MyPage/StarTrace/StarTrace.style";

const StarTrace = ({ habitList }: { habitList: HabitOneDayType[] }) => {
	const dispatch = useAppDispatch();

	const { habitRecordList } = useAppSelector((state) => state.habit);

	const [sortOrder, setSortOrder] = useState("최신순");
	const [isRest, setIsRest] = useState("실천");
	const [runHabitId, setRunHabitId] = useState(habitList[0].runHabitId);

	const handleSortOrder = (sortOrder: string) => {
		setSortOrder(sortOrder);
	};

	const handleIsRest = (rest: string) => {
		setIsRest(rest);
	};

	const handleHabitId = (habitId: number) => {
		setRunHabitId(habitId);
	};

	const request = {
		runHabitId,
		isRest: isRest === "실천" ? false : true,
		page: 0,
		size: 20,
		sortBy: "runDate",
		sortOrder: sortOrder === "최신순" ? "desc" : "asc",
		related: "runHabit",
	};

	useEffect(() => {
		dispatch(getHabitRecordList(request));
	}, [sortOrder, isRest, runHabitId]);

	return (
		<>
			<ButtonCarousel habitList={habitList} handleHabitId={handleHabitId} />

			<SortButton
				sortOrder={sortOrder}
				handleSortOrder={handleSortOrder}
				isRest={isRest}
				handleIsRest={handleIsRest}
			/>
			{habitRecordList !== null && (
				<div css={layoutStyle}>
					{habitRecordList.map((data) => (
						<Content
							key={data.habitHistoryId}
							date={`${dateFormat(new Date(data.runDate), "POINT")} (${weekFormat(new Date(data.runDate))})`}
							title={
								isRest === "휴식"
									? "쉬었음"
									: `${convertFromTimeString(data.runHabit.runTime)?.split(" ")[0]} ${convertFromTimeString(data.runHabit.runTime)?.split(" ")[1].split(":")[0]}시 ${convertFromTimeString(data.runHabit.runTime)?.split(" ")[1].split(":")[1]}분에 ${data.runPlace} ${data.action} ${data.runValue} ${data.runHabit.unit}`
							}
							achievement={data.achievement}
							content={data.review}
							isRest={isRest}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default StarTrace;
