import { layoutStyle, boxStyle } from "@/components/ChartPage/MonthChart/MonthChart.style";

const MonthChart = () => {
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

export default MonthChart;
