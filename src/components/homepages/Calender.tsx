import { useEffect, useRef, useState } from "react";

import { css } from "@emotion/react";

import { daysOfTheWeek, currentDate } from "@/constants/homeConstants";
import { theme } from "@/styles/theme";

import { calenderStyle } from "@/components/homepages/Calender.style";

interface CalendarProps {
	setTargetDate: React.Dispatch<React.SetStateAction<DateListEl>>;
	targetDate: DateListEl;
	timeGap: string;
}

interface DateListEl {
	year: number;
	month: number;
	date: number;
	day: string;
	isPlanned: boolean;
}

function Calender({ setTargetDate, targetDate, timeGap }: CalendarProps) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [dateList, setDateList] = useState<DateListEl[]>([]);

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
		const prevDates = Array.from({ length: 14 })
			.map((_, idx) => {
				const prevDate = new Date(+year, +month, +date - (idx + 1));
				return {
					year: prevDate.getFullYear(),
					month: prevDate.getMonth() + 1,
					date: prevDate.getDate(),
					day: daysOfTheWeek[prevDate.getDay()],
					isPlanned: false,
				};
			})
			.reverse();
		const nextDates = Array.from({ length: 14 }).map((_, idx) => {
			const nextDate = new Date(+year, +month, +date + (idx + 1));
			return {
				year: nextDate.getFullYear(),
				month: nextDate.getMonth() + 1,
				date: nextDate.getDate(),
				day: daysOfTheWeek[nextDate.getDay()],
				isPlanned: false,
			};
		});
		setDateList([...prevDates, targetDate, ...nextDates]);
	}, []);

	useEffect(() => {
		containerRef.current?.scrollTo({
			left: (containerRef.current?.scrollWidth - containerRef.current?.offsetWidth) / 2,
			behavior: "instant",
		});
	}, [dateList]);

	return (
		<div>
			<div css={calenderStyle.dateWrapper}>
				<div>
					<span
						css={css`
							${theme.font.head_a}
						`}
					>
						{`${targetDate.month}월 ${targetDate.date}일`}
					</span>
					<span
						css={css`
							${theme.font.body_c}
							margin-left: 0.5rem;
						`}
					>
						{targetDate.year}
					</span>
				</div>
				<div
					css={css`
						${theme.font.button_big}
					`}
				>
					{timeGap}
				</div>
			</div>
			<div
				css={calenderStyle.carouselWrapper}
				ref={containerRef}
				onScroll={() => {
					// 왼쪽 끝까지 스크롤될 때 이전 14일을 렌더링, 첫 원소 기준으로 뒤의 15개의 원소를 slice
					if (containerRef.current?.scrollLeft === 0) {
						const { year, month, date } = dateList[0];
						const prev = Array.from({ length: 14 })
							.map((_, idx) => {
								const prevDate = new Date(+year, +month - 1, +date - (idx + 1));
								return {
									year: prevDate.getFullYear(),
									month: prevDate.getMonth() + 1,
									date: prevDate.getDate(),
									day: daysOfTheWeek[prevDate.getDay()],
									isPlanned: false,
								};
							})
							.reverse();
						setDateList([...prev, ...dateList.slice(0, 15)]);
					}
					// 오른쪽 끝까지 스크롤될 때에 이후 14일을 렌더링, 마지막 원소 기준으로 앞의 15개의 원소를 slice
					if (
						containerRef.current &&
						containerRef.current?.scrollLeft ===
							containerRef.current?.scrollWidth - containerRef.current?.offsetWidth
					) {
						const { year, month, date } = dateList[dateList.length - 1];
						const next = Array.from({ length: 14 }).map((_, idx) => {
							const nextDate = new Date(+year, +month - 1, +date + (idx + 1));
							return {
								year: nextDate.getFullYear(),
								month: nextDate.getMonth() + 1,
								date: nextDate.getDate(),
								day: daysOfTheWeek[nextDate.getDay()],
								isPlanned: false,
							};
						});
						setDateList([...dateList.slice(dateList.length - 15), ...next]);
					}
				}}
			>
				<div css={calenderStyle.carousel}>
					{dateList.map((el: DateListEl) => {
						let isSelected = false;
						const { year, month, date, day, isPlanned } = el;
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
									setTargetDate({
										year,
										month,
										date,
										day,
										isPlanned,
									});
								}}
							>
								<section css={calenderStyle.dayPart}>{el.day}</section>
								<section css={calenderStyle.datePart}>
									<label css={calenderStyle.dateInner({ isPlanned })}>
										{el.month}/{el.date}
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
