import { useEffect, useRef, useState } from "react";

import { DateInfo, CalenderProps } from "@/types/homeTypes";

import { daysOfTheWeek, currentDate } from "@/constants/homeConstants";

import { renderDates } from "@/utils/homeUtils";

import { calenderStyle } from "@/components/Home/Calender.style";

function Calender({ setTargetDate, targetDate, timeGap }: CalenderProps) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [dateList, setDateList] = useState<DateInfo[]>([]);

	// 처음 렌더링될 때 오늘 시간을 기준으로 이전 14일과 오늘, 이후 14일을 계산 dateList에 세팅
	useEffect(() => {
		const { year, month, date, day } = currentDate;
		const targetDate = {
			year: year,
			month: month + 1,
			date: date,
			day: daysOfTheWeek[day],
			isPlanned: false,
		};
		const prevDates = renderDates(year, month, date, 14, false);
		const nextDates = renderDates(year, month, date, 14, true);
		setDateList([...prevDates, targetDate, ...nextDates]);
	}, []);

	useEffect(() => {
		containerRef.current?.scrollTo({
			left: (containerRef.current?.scrollWidth - containerRef.current?.offsetWidth) / 2,
			behavior: "instant",
		});
	}, [dateList]);

	const handleContainerScroll = () => {
		if (containerRef.current?.scrollLeft === 0) {
			const { year, month, date } = dateList[0];
			const prev = renderDates(year, month - 1, date, 14, false);
			setDateList([...prev, ...dateList.slice(0, 15)]);
		}
		if (
			containerRef.current &&
			containerRef.current?.scrollLeft ===
				containerRef.current?.scrollWidth - containerRef.current?.offsetWidth
		) {
			const { year, month, date } = dateList[dateList.length - 1];
			const next = renderDates(year, month - 1, date, 14, true);
			setDateList([...dateList.slice(dateList.length - 15), ...next]);
		}
	};

	const handleTargetDate = (dateEl: DateInfo) => {
		setTargetDate(dateEl);
	};

	return (
		<div>
			<div css={calenderStyle.dateWrapper}>
				<div>
					<span className="currentDate">{`${targetDate.month}월 ${targetDate.date}일`}</span>
					<span className="currentYear">{targetDate.year}</span>
				</div>
				<div className="timeGap">{timeGap}</div>
			</div>
			<div
				css={calenderStyle.carouselWrapper}
				ref={containerRef}
				onScroll={() => handleContainerScroll()}
			>
				<div css={calenderStyle.carousel}>
					{dateList.map((dateEl: DateInfo) => {
						let isSelected = false;
						const { year, month, date, isPlanned } = dateEl;
						if (
							targetDate.year === year &&
							targetDate.month === month &&
							targetDate.date === date
						) {
							isSelected = true;
						}
						return (
							<span
								key={`${year}.${month}.${date}`}
								css={calenderStyle.carouselEl({ isSelected })}
								onClick={() => {
									handleTargetDate(dateEl);
								}}
							>
								<section css={calenderStyle.dayPart}>{dateEl.day}</section>
								<section css={calenderStyle.datePart}>
									<label css={calenderStyle.dateInner({ isPlanned })}>
										{dateEl.month}/{dateEl.date}
									</label>
								</section>
							</span>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Calender;
