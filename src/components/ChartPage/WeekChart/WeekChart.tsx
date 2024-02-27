import { layoutStyle, boxStyle } from "@/components/ChartPage/WeekChart/WeekChart.style";

const WeekChart = () => {
	return (
		<div css={layoutStyle}>
			<div css={boxStyle}>
				<h2>일주일중</h2>
				<h3>
					<span>5일</span> 해냈어요!
				</h3>
			</div>
		</div>
	);
};

export default WeekChart;
