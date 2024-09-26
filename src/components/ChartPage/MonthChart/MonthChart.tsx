import { useState, useEffect, useCallback, useMemo } from "react";

import {
	endOfMonth,
	addMonths,
	subMonths,
	format,
	startOfMonth,
	startOfWeek,
	addDays,
	isSameMonth,
} from "date-fns";

import LeftArrowIcon from "@/assets/icon/ic-calendar-left-arrow.svg?react";
import RightArrowDisabledIcon from "@/assets/icon/ic-calendar-right-arrow-disabled.svg?react";
import RightArrowIcon from "@/assets/icon/ic-calendar-right-arrow.svg?react";

import Chart from "@/components/ChartPage/MonthChart/Chart";

import { getHabitListWithStat } from "@/api/habit/habitThunk";
import { useAppDispatch, useAppSelector } from "@/api/hooks";

import { WEEK } from "@/constants/calendar";
import { habitIconData } from "@/constants/mypage";

import { dateFormat } from "@/utils/dateFormat";

import {
	layoutStyle,
	innerBoxStyle,
	calendarSectionStyle,
	calendarBoxStyle,
	iconListBoxStyle,
	dateBoxStyle,
	dayStyle,
	headerLayoutStyle,
	headerBoxStyle,
} from "@/components/ChartPage/MonthChart/MonthChart.style";

const achievementColors = ["#a5aeff", "#8cf8ff", "#b7ff6e", "#ffe276", "#ffc1f9"];

const MonthChart = ({ runHabitId }: { runHabitId: number }) => {
	const dispatch = useAppDispatch();

	const { habitListWithStat } = useAppSelector((state) => state.habit);

	const [currentMonth, setCurrentMonth] = useState(new Date());
	const nowMonth = new Date();
	const monthStart = startOfMonth(currentMonth);
	const startWeek = startOfWeek(monthStart);

	const dayList = useMemo(() => {
		return Array.from({ length: 42 }, (_, index) => addDays(startWeek, index));
	}, [startWeek]);

	const handlePrevMonth = useCallback(() => {
		setCurrentMonth((prev) => subMonths(prev, 1));
	}, []);

	const handleNextMonth = useCallback(() => {
		if (currentMonth >= nowMonth) return;
		setCurrentMonth((prev) => addMonths(prev, 1));
	}, [currentMonth, nowMonth]);

	const startDate = startOfMonth(currentMonth);
	const endDate = endOfMonth(currentMonth);

	const request = {
		runHabitId,
		startDate: dateFormat(startDate, "LINE"),
		endDate: dateFormat(endDate, "LINE"),
		page: 0,
		size: 31,
		sortBy: "runDate",
		sortOrder: "asc",
		related: "runHabit",
	};

	useEffect(() => {
		dispatch(getHabitListWithStat(request));
	}, [currentMonth]);

	if (!habitListWithStat) {
		return <div />;
	}

	const achievedDaysCount = habitListWithStat.filter((habit) => habit.achievement).length;

	const getBackgroundColor = (date: Date) => {
		const habitForDate = habitListWithStat.find(
			(habit) => format(new Date(habit.runDate), "yyyy-MM-dd") === format(date, "yyyy-MM-dd"),
		);

		if (!habitForDate) {
			return "transparent";
		}

		return habitForDate.achievement === null
			? "#f0f0f6"
			: achievementColors[habitForDate.achievement - 1];
	};

	const achievementCounts: number[] = Array(5).fill(0); // 0부터 5까지 인덱스를 갖는 배열 생성 (0번 인덱스는 사용하지 않음)

	habitListWithStat.forEach((habit) => {
		if (habit.achievement >= 1 && habit.achievement <= 5) {
			achievementCounts[habit.achievement - 1]++;
		}
	});

	// 각 achievement의 개수 출력
	console.log(achievementCounts);

	return (
		<main css={layoutStyle}>
			<div css={innerBoxStyle}>
				<section css={calendarSectionStyle}>
					<div css={headerLayoutStyle}>
						<LeftArrowIcon onClick={handlePrevMonth} />

						<div css={headerBoxStyle}>
							<h1>{format(currentMonth, "M")}월</h1>
							<p>{format(currentMonth, "yyyy")}년</p>
						</div>

						{currentMonth >= nowMonth ? (
							<RightArrowDisabledIcon />
						) : (
							<RightArrowIcon onClick={handleNextMonth} />
						)}
					</div>

					<h2>
						<span>{achievedDaysCount}일</span> 해냈어요!
					</h2>

					<div css={calendarBoxStyle}>
						<div css={dateBoxStyle}>
							{WEEK.map((week) => (
								<div key={week} css={dayStyle(true, true)}>
									{week}
								</div>
							))}
							{dayList.map((dayData) => (
								<div
									key={dayData.toString()}
									css={dayStyle(
										isSameMonth(monthStart, dayData),
										false,
										getBackgroundColor(dayData),
									)}
								>
									<p>{format(dayData, "d")}</p>
								</div>
							))}
						</div>

						<div className="divider" />

						<div css={iconListBoxStyle}>
							{achievementCounts.map((data, index) => (
								<div key={`${data}${index}`} className="iconBox">
									{habitIconData[index].icon}
									<p>{data}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<Chart currentMonth={currentMonth} habitListWithStat={habitListWithStat} />
			</div>
		</main>
	);
};

export default MonthChart;
