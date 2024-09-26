import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import MonthChart from "@/components/ChartPage/MonthChart/MonthChart";
import Tab from "@/components/ChartPage/Tab/Tab";
import TotalInfo from "@/components/ChartPage/TotalInfo/TotalInfo";
import WeekChart from "@/components/ChartPage/WeekChart/WeekChart";
import ButtonCarousel from "@/components/common/ButtonCarousel/ButtonCarousel";
import { HabitOneDayType } from "@/types/habit";

import { getHabitStatistics } from "@/api/habit/habitThunk";
import { useAppDispatch, useAppSelector } from "@/api/hooks";

import { TAB_KEY, TAB_PARAM } from "@/constants/tabConstants";

const Chart = ({ habitList }: { habitList: HabitOneDayType[] }) => {
	const dispatch = useAppDispatch();

	const { habitStatistics } = useAppSelector((state) => state.habit);

	const [searchParams, setSearchParams] = useSearchParams();

	const [runHabitId, setRunHabitId] = useState(habitList[0].runHabitId);

	const handleHabitId = (habitId: number) => {
		setRunHabitId(habitId);
	};

	useEffect(() => {
		if (
			searchParams.size === 0 ||
			(searchParams.get(TAB_KEY) !== TAB_PARAM.WEEK &&
				searchParams.get(TAB_KEY) !== TAB_PARAM.MONTH)
		) {
			setSearchParams(`${TAB_KEY}=${TAB_PARAM.WEEK}`);
		}
	}, [searchParams]);

	useEffect(() => {
		dispatch(getHabitStatistics(runHabitId));
	}, [runHabitId]);

	if (!habitStatistics) {
		return <div />;
	}

	return (
		<>
			<ButtonCarousel habitList={habitList} handleHabitId={handleHabitId} />
			<TotalInfo
				totalStarCount={habitStatistics.totalStarCount}
				totalValue={habitStatistics.totalValue}
			/>
			<Tab searchParams={searchParams} setSearchParams={setSearchParams} />
			{searchParams.get(TAB_KEY) === TAB_PARAM.WEEK ? (
				<WeekChart runHabitId={runHabitId} />
			) : (
				<MonthChart runHabitId={runHabitId} />
			)}
		</>
	);
};

export default Chart;
