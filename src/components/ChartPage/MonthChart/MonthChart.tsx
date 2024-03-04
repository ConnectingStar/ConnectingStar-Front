import { useState, useCallback } from "react";

import { addMonths, subMonths } from "date-fns";
import { LineChart, Line, ReferenceLine } from "recharts";

import Calendar from "@/components/ChartPage/MonthChart/Calendar";
import CalendarHeader from "@/components/ChartPage/MonthChart/CalendarHeader";

import { habitIconData } from "@/constants/myPageConstants";

import { theme } from "@/styles/theme";

import {
	layoutStyle,
	innerBoxStyle,
	calendarSectionStyle,
	calendarBoxStyle,
	iconListBoxStyle,
	chartSectionStyle,
	chartBoxStyle,
	dividerStyle,
	chartTextStyle,
} from "@/components/ChartPage/MonthChart/MonthChart.style";

const data = [
	{ date: "12.31", value: 3 },
	{ value: 7 },
	{ value: 16 },
	{ value: 3 },
	{ value: 1 },
	{ value: 5 },
	{ value: 9 },
	{ value: 13 },
	{ date: "12.1", value: 4 },
];

const MonthChart = () => {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [nowMonth] = useState(new Date());

	const firstDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
	const lastDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

	const handlePrevMonth = useCallback(() => {
		setCurrentMonth(subMonths(currentMonth, 1));
	}, [currentMonth]);

	const handleNextMonth = useCallback(() => {
		if (currentMonth >= nowMonth) {
			setCurrentMonth(nowMonth);
		} else {
			setCurrentMonth(addMonths(currentMonth, 1));
		}
	}, [currentMonth]);

	return (
		<main css={layoutStyle}>
			<div css={innerBoxStyle}>
				<section css={calendarSectionStyle}>
					<CalendarHeader
						currentMonth={currentMonth}
						onClickNextMonth={handleNextMonth}
						onClickPrevMonth={handlePrevMonth}
						disabledNextMonth={currentMonth >= nowMonth}
					/>

					<h2>
						<span>27일</span> 해냈어요!
					</h2>
					<div css={calendarBoxStyle}>
						<Calendar currentMonth={currentMonth} />

						<div className="divider" />

						{/* api 연결 후 아이콘 데이터 변경 예정 */}
						<div css={iconListBoxStyle}>
							{habitIconData.map((data) => (
								<div key={data.id} className="iconBox">
									{data.icon}
									<p>3</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section css={chartSectionStyle}>
					<p>{currentMonth.getMonth() + 1}월</p>
					<h1>
						<span>평균 6 페이지,</span>
						<br />
						<span>누적 120 페이지</span>
						<br />
						해냈어요!
					</h1>
					<div css={chartBoxStyle}>
						<LineChart width={240} height={170} data={data}>
							<Line
								type="monotone"
								dataKey="value"
								stroke={theme.color.main_blue}
								dot={false}
								strokeWidth={3}
							/>
							<ReferenceLine y={6.7} stroke="#ffd32c" strokeDasharray="2" label="평균" />
						</LineChart>
						<div css={dividerStyle} />
						<div css={chartTextStyle}>
							<p>
								{firstDate.getMonth() + 1}.{firstDate.getDate()}
							</p>
							<p>
								{lastDate.getMonth() + 1}.{lastDate.getDate()}
							</p>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default MonthChart;
