import { useState, useCallback } from "react";

import { startOfWeek, endOfWeek, subWeeks, addWeeks } from "date-fns";

import LeftArrowIcon from "@/assets/icon/ic-calendar-left-arrow.svg?react";
import RightArrowDisabledIcon from "@/assets/icon/ic-calendar-right-arrow-disabled.svg?react";
import RightArrowIcon from "@/assets/icon/ic-calendar-right-arrow.svg?react";
import BadChartIcon from "@/assets/icon/ic-chart-bad.svg?react";
import GoodChartIcon from "@/assets/icon/ic-chart-good.svg?react";
import NormalChartIcon from "@/assets/icon/ic-chart-normal.svg?react";
import VeryBadChartIcon from "@/assets/icon/ic-chart-very-bad.svg?react";
import VeryGoodChartIcon from "@/assets/icon/ic-chart-very-good.svg?react";

import { WEEK } from "@/constants/calendarConstants";

import { dateFormat } from "@/utils/dateFormat";

import {
	layoutStyle,
	boxStyle,
	chartBoxStyle,
	dateBoxStyle,
	chartStyle,
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
							{dateFormat(startDate, "POINT")} - {dateFormat(endDate, "POINT")}
						</h3>

						{endDate >= nowMonth ? (
							<RightArrowDisabledIcon width={16} height={16} />
						) : (
							<RightArrowIcon onClick={handleNextMonth} width={16} height={16} />
						)}
					</div>

					{/* api 연결 이후 데이터 조건부 렌더링으로 변경 예정 */}
					<div css={chartStyle}>
						<VeryBadChartIcon />
						<VeryGoodChartIcon />
						<GoodChartIcon />
						<NormalChartIcon />
						<BadChartIcon />
						<VeryBadChartIcon />
						<VeryBadChartIcon />
					</div>

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
