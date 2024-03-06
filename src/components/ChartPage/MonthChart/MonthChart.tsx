import { useState } from "react";

import Chart from "@/components/ChartPage/MonthChart/Chart";
import MonthCalendar from "@/components/ChartPage/MonthChart/MonthCalendar/MonthCalendar";

import { layoutStyle, innerBoxStyle } from "@/components/ChartPage/MonthChart/MonthChart.style";

const MonthChart = () => {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [nowMonth] = useState(new Date());

	return (
		<main css={layoutStyle}>
			<div css={innerBoxStyle}>
				<MonthCalendar
					currentMonth={currentMonth}
					setCurrentMonth={setCurrentMonth}
					nowMonth={nowMonth}
				/>

				<Chart currentMonth={currentMonth} />
			</div>
		</main>
	);
};

export default MonthChart;
