import { useEffect, useRef, useState } from "react";

import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

import { calenderStyle } from "@/components/homepages/Calender.style";

interface CalendarProps {
	setTargetDate: React.Dispatch<React.SetStateAction<DateListEl>>;
	targetDate: DateListEl;
	timeDiff: string;
}

interface DateListEl {
	year: number;
	month: number;
	day: number;
	DOTW: string;
	isPlanned: boolean;
}

function Calender({ setTargetDate, targetDate, timeDiff }: CalendarProps) {
	const today = new Date();
	const daysOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];
	const currentDate = {
		year: today.getFullYear(),
		month: today.getMonth() + 1,
		day: today.getDate(),
		DOTW: daysOfTheWeek[today.getDay()],
		isPlanned: false,
	};

	const containerRef = useRef<HTMLDivElement | null>(null);
	const centeredRef = useRef<HTMLSpanElement | null>(null);
	const [dateList, setDateList] = useState<DateListEl[]>([]);

	// 처음 렌더링될 때 오늘 시간을 기준으로 이전 14일과 오늘, 이후 14일을 계산 dateList에 세팅
	useEffect(() => {
		const { year, month, day } = currentDate;
		const prevDates = Array.from({ length: 14 })
			.map((_, idx) => {
				const prevDate = new Date(+year, +month - 1, +day - (idx + 1));
				return {
					year: prevDate.getFullYear(),
					month: prevDate.getMonth() + 1,
					day: prevDate.getDate(),
					DOTW: daysOfTheWeek[prevDate.getDay()],
					isPlanned: false,
				};
			})
			.reverse();
		const nextDates = Array.from({ length: 14 }).map((_, idx) => {
			const nextDate = new Date(+year, +month - 1, +day + (idx + 1));
			return {
				year: nextDate.getFullYear(),
				month: nextDate.getMonth() + 1,
				day: nextDate.getDate(),
				DOTW: daysOfTheWeek[nextDate.getDay()],
				isPlanned: false,
			};
		});
		setDateList([...prevDates, targetDate, ...nextDates]);
	}, []);
	// dateList가 업데이트될 때에 carousel길이의 중앙으로 오게 설정
	// containerRef에서 dateList가 업데이트되고 난 후에 중앙값 정렬을 하게 되면 항상 29개의 원소 개수를 유지하게 되므로
	// 렌더링이 되기 이전의 첫 원소 혹은 끝의 원소를 기준으로 스크롤하게 됨
	useEffect(() => {
		containerRef.current?.scrollTo({
			left: (containerRef.current?.scrollWidth - containerRef.current?.offsetWidth) / 2,
			behavior: "instant",
		});
	}, [dateList]);

	return (
		<div>
			<div css={calenderStyle.date}>
				<div css={calenderStyle.targetDate}>
					<span
						css={css`
							${theme.font.head_a}
						`}
					>
						{`${targetDate.month}월 ${targetDate.day}일`}
					</span>
					{/* 요일 <span
						css={css`
							${theme.font.body_a}
						`}
					>
						({targetDate.DOTW})
					</span> */}
					<span
						css={css`
							${theme.font.body_c}
							margin-left: 0.5rem;
						`}
					>
						{`${targetDate.year}`}
					</span>
				</div>
				<div
					css={css`
						${theme.font.button_big}
					`}
				>
					{timeDiff}
				</div>
			</div>
			<div
				css={calenderStyle.carouselWrapper}
				ref={containerRef}
				onScroll={() => {
					// 왼쪽 끝까지 스크롤될 때 이전 14일을 렌더링, 첫 원소 기준으로 뒤의 15개의 원소를 slice
					if (containerRef.current?.scrollLeft === 0) {
						const { year, month, day } = dateList[0];
						const prev = Array.from({ length: 14 })
							.map((_, idx) => {
								const prevDate = new Date(+year, +month - 1, +day - (idx + 1));
								return {
									year: prevDate.getFullYear(),
									month: prevDate.getMonth() + 1,
									day: prevDate.getDate(),
									DOTW: daysOfTheWeek[prevDate.getDay()],
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
						const { year, month, day } = dateList[dateList.length - 1];
						const next = Array.from({ length: 14 }).map((_, idx) => {
							const nextDate = new Date(+year, +month - 1, +day + (idx + 1));
							return {
								year: nextDate.getFullYear(),
								month: nextDate.getMonth() + 1,
								day: nextDate.getDate(),
								DOTW: daysOfTheWeek[nextDate.getDay()],
								isPlanned: false,
							};
						});
						setDateList([...dateList.slice(dateList.length - 15), ...next]);
					}
				}}
			>
				<div css={calenderStyle.carousel}>
					{dateList.map((el: DateListEl) => {
						let isCentered = false;
						let isTarget = false;
						const { year, month, day, DOTW, isPlanned } = el;
						if (
							today.getFullYear() === year &&
							today.getMonth() === month - 1 &&
							today.getDate() === day
						) {
							isCentered = true;
						}
						if (targetDate.year === year && targetDate.month === month && targetDate.day === day) {
							isTarget = true;
						}
						return (
							<span
								key={`${year}.${month}.${day}`}
								id={isCentered ? "center" : ""}
								ref={isCentered ? centeredRef : null}
								css={isTarget ? calenderStyle.targeted : calenderStyle.carouselEl}
								onClick={() => {
									setTargetDate({
										year,
										month,
										day,
										DOTW,
										isPlanned,
									});
								}}
							>
								<section css={calenderStyle.dayPart}>{el.DOTW}</section>
								<section css={calenderStyle.datePart}>
									<label css={isPlanned ? calenderStyle.planned : calenderStyle.dateInner}>
										{el.month}/{el.day}
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
