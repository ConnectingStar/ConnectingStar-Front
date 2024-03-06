import { LineChart, Line, ReferenceLine } from "recharts";

import { theme } from "@/styles/theme";

import {
	chartSectionStyle,
	chartBoxStyle,
	dividerStyle,
	chartTextStyle,
	infoBoxStyle,
} from "@/components/ChartPage/MonthChart/MonthChart.style";

const data = [
	{ value: 3 },
	{ value: 7 },
	{ value: 16 },
	{ value: 3 },
	{ value: 1 },
	{ value: 5 },
	{ value: 9 },
	{ value: 13 },
	{ value: 4 },
];

const Chart = ({ currentMonth }: { currentMonth: Date }) => {
	const firstDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
	const lastDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

	return (
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
				<LineChart width={280} height={170} data={data}>
					<Line
						type="monotone"
						dataKey="value"
						stroke={theme.color.main_blue}
						dot={false}
						strokeWidth={3}
					/>
					<ReferenceLine y={6.7} stroke="#ffbb00" strokeDasharray="2" />
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
				<div css={infoBoxStyle}>
					<div className="divider" />
					<span>평균값</span>
				</div>
			</div>
		</section>
	);
};

export default Chart;
