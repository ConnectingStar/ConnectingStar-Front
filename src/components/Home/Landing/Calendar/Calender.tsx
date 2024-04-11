import { useEffect, useRef, useState } from "react";

import { daysOfTheWeek, currentDate } from "@/constants/homeConstants";

import { isNextDates, renderDates } from "@/utils/homeUtils";

import type { DateInfo, CalenderProps } from "@/types/homeTypes";

import {
	layoutStyle,
	titleBoxStyle,
	carouselBoxStyle,
	dayBoxStyle,
} from "@/components/Home/Landing/Calendar/Calender.style";

function Calender({ selectedDate, setSelectedDate, timeGap }: CalenderProps) {
	const containerRef = useRef<HTMLDivElement | null>(null);

	const { year, month, date, day } = currentDate;
	const centerDate = {
		year: year,
		month: month + 1,
		date: date,
		day: daysOfTheWeek[day],
		isPlanned: true,
	};

	const prevDates = renderDates(year, month, date, 14, false);
	const nextDates = renderDates(year, month, date, 14, true);

	const [dateList, setDateList] = useState<DateInfo[]>([...prevDates, centerDate, ...nextDates]);

	const handleContainerScroll = () => {
		if (!containerRef.current) {
			return;
		}
		if (containerRef.current.scrollLeft === 0) {
			const { year, month, date } = dateList[0];
			const prev = renderDates(year, month - 1, date, 14, false);
			setDateList([...prev, ...dateList.slice(0, 15)]);
		}
		if (
			containerRef.current.scrollLeft ===
			containerRef.current.scrollWidth - containerRef.current.offsetWidth
		) {
			const { year, month, date } = dateList[dateList.length - 1];
			const next = renderDates(year, month - 1, date, 14, true);
			setDateList([...dateList.slice(dateList.length - 15), ...next]);
		}
	};

	useEffect(() => {
		if (!containerRef.current) {
			return;
		}
		containerRef.current.scrollTo({
			left: (containerRef.current.scrollWidth - containerRef.current.offsetWidth) / 2,
			behavior: "instant",
		});
	}, [dateList]);

	return (
		<div css={layoutStyle}>
			<div css={titleBoxStyle}>
				<p>
					<span>
						{selectedDate.month}월 {selectedDate.date}일
					</span>
					<span>{selectedDate.year}</span>
				</p>
				<span>{timeGap}</span>
			</div>

			<div css={carouselBoxStyle} ref={containerRef} onScroll={handleContainerScroll}>
				<div>
					{dateList.map((dateEl: DateInfo) => {
						const { year, month, date, isPlanned } = dateEl;
						const isNextDate = isNextDates(year, month, date);
						let isSelected = false;
						if (
							selectedDate.year === year &&
							selectedDate.month === month &&
							selectedDate.date === date
						) {
							isSelected = true;
						}
						return (
							<div
								key={`${year}.${month}.${date}`}
								css={dayBoxStyle(isSelected, isPlanned, isNextDate)}
								onClick={() => setSelectedDate(dateEl)}
							>
								<span>{dateEl.day}</span>
								<span>
									<p>{dateEl.date}</p>
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Calender;
