import { useState, useCallback } from "react";

import { startOfWeek, endOfWeek, subWeeks, addWeeks } from "date-fns";
import { BarChart, Bar } from "recharts";

import LeftArrowIcon from "@/assets/icon/ic-calendar-left-arrow.svg?react";
import RightArrowDisabledIcon from "@/assets/icon/ic-calendar-right-arrow-disabled.svg?react";
import RightArrowIcon from "@/assets/icon/ic-calendar-right-arrow.svg?react";

import { WEEK } from "@/constants/calendarConstants";

import { dateFormat } from "@/utils/dateFormat";

const data = [
	{
		complete: 7,
	},
	{
		complete: 6,
	},
	{
		complete: 5,
	},
	{
		complete: 4,
	},
	{
		complete: 3,
	},
	{
		complete: 2,
	},
	{
		complete: 1,
	},
];

import {
	layoutStyle,
	boxStyle,
	chartBoxStyle,
	dateBoxStyle,
	weekBoxStyle,
} from "@/components/ChartPage/WeekChart/WeekChart.style";

const WeekChart = () => {
	const [nowMonth] = useState(new Date());
	const [startDate, setStartDate] = useState(startOfWeek(new Date()));
	const [endDate, setEndDate] = useState(endOfWeek(new Date()));

	const handlePrevMonth = useCallback(() => {
		setStartDate((prev) => subWeeks(prev, 1));
		setEndDate((prev) => subWeeks(prev, 1));
	}, [startDate, endDate]);

	const handleNextMonth = useCallback(() => {
		if (endDate >= nowMonth) {
			return;
		} else {
			setStartDate((prev) => addWeeks(prev, 1));
			setEndDate((prev) => addWeeks(prev, 1));
		}
	}, [startDate, endDate]);

	return (
		<div css={layoutStyle}>
			<div css={boxStyle}>
				<h2>일주일중</h2>
				<h3>
					<span>5일</span> 해냈어요!
				</h3>
				<div css={chartBoxStyle}>
					<div css={dateBoxStyle}>
						<LeftArrowIcon onClick={handlePrevMonth} width={16} height={16} />
						<h3>
							{dateFormat(startDate)} - {dateFormat(endDate)}
						</h3>
						{endDate >= nowMonth ? (
							<RightArrowDisabledIcon width={16} height={16} />
						) : (
							<RightArrowIcon onClick={handleNextMonth} width={16} height={16} />
						)}
					</div>

					<BarChart width={280} height={140} data={data} margin={{ top: 20 }}>
						<Bar dataKey="complete" radius={5} fill="red" />
					</BarChart>

					<div css={weekBoxStyle}>
						{WEEK.map((week) => (
							<p key={week}>{week}</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeekChart;
