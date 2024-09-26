import { useState, useCallback, useEffect } from "react";

import { startOfWeek, addDays, endOfWeek, subWeeks, addWeeks } from "date-fns";

import LeftArrowIcon from "@/assets/icon/ic-calendar-left-arrow.svg?react";
import RightArrowDisabledIcon from "@/assets/icon/ic-calendar-right-arrow-disabled.svg?react";
import RightArrowIcon from "@/assets/icon/ic-calendar-right-arrow.svg?react";

import { getHabitListWithStat } from "@/api/habit/habitThunk";
import { useAppDispatch, useAppSelector } from "@/api/hooks";

import { WEEK } from "@/constants/calendar";
import { CHART_ICON_DATA } from "@/constants/mypage";

import { dateFormat } from "@/utils/dateFormat";

import {
	layoutStyle,
	boxStyle,
	chartBoxStyle,
	dateBoxStyle,
	chartStyle,
	weekBoxStyle,
	weekStyle,
	emptyChartStyle,
} from "@/components/ChartPage/WeekChart/WeekChart.style";

const WeekChart = ({ runHabitId }: { runHabitId: number }) => {
	const dispatch = useAppDispatch();

	const { habitListWithStat } = useAppSelector((state) => state.habit);

	const [nowMonth] = useState(new Date());
	const [startDate, setStartDate] = useState(startOfWeek(new Date()));
	const [endDate, setEndDate] = useState(endOfWeek(new Date()));
	const [dateArray, setDateArray] = useState<string[]>([]);

	const handlePrevMonth = useCallback(() => {
		setStartDate((prev) => subWeeks(prev, 1));
		setEndDate((prev) => subWeeks(prev, 1));
	}, []);

	const handleNextMonth = useCallback(() => {
		if (endDate >= nowMonth) return;
		setStartDate((prev) => addWeeks(prev, 1));
		setEndDate((prev) => addWeeks(prev, 1));
	}, [endDate, nowMonth]);

	const request = {
		runHabitId,
		startDate: dateFormat(startDate, "LINE"),
		endDate: dateFormat(endDate, "LINE"),
		page: 0,
		size: 20,
		sortBy: "runDate",
		sortOrder: "asc",
		related: "runHabit",
	};

	useEffect(() => {
		dispatch(getHabitListWithStat(request));
	}, [startDate, endDate]);

	useEffect(() => {
		setDateArray(Array.from({ length: 7 }, (_, i) => dateFormat(addDays(startDate, i), "LINE")));
	}, [startDate]);

	if (!habitListWithStat) {
		return <div />;
	}

	const achievedDays = habitListWithStat.filter((habit) => habit.achievement > 0).length;

	return (
		<div css={layoutStyle}>
			<div css={boxStyle}>
				<h2>일주일 중</h2>
				<h3>
					<span>{achievedDays}일</span> 해냈어요!
				</h3>

				<div css={chartBoxStyle}>
					<div css={dateBoxStyle}>
						<LeftArrowIcon onClick={handlePrevMonth} width={16} height={16} />

						<h3>
							{dateFormat(startDate, "POINT")} - {dateFormat(endDate, "POINT")}
						</h3>

						{endDate >= nowMonth ? (
							<RightArrowDisabledIcon width={16} height={16} />
						) : (
							<RightArrowIcon onClick={handleNextMonth} width={16} height={16} />
						)}
					</div>

					<div css={chartStyle}>
						{dateArray.map((dateData) => {
							const habitForDate = habitListWithStat.find(
								(habitData) => dateFormat(new Date(habitData.runDate), "LINE") === dateData,
							);

							return (
								<div key={dateData}>
									{habitForDate && habitForDate.achievement !== null ? (
										CHART_ICON_DATA[habitForDate.achievement - 1]
									) : (
										<div css={emptyChartStyle} />
									)}
								</div>
							);
						})}
					</div>

					<div css={weekBoxStyle}>
						{dateArray.map((dateData, index) => {
							const habitForDate = habitListWithStat.find(
								(habitData) => dateFormat(new Date(habitData.runDate), "LINE") === dateData,
							);

							return (
								<p
									key={WEEK[index]}
									css={weekStyle(habitForDate && habitForDate.achievement === null)}
								>
									{WEEK[index]}
								</p>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeekChart;
