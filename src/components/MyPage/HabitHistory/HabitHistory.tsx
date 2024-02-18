import { useState } from "react";

import HabitCard from "@/components/MyPage/HabitHistory/HabitCard";

import {
	listStyle,
	getButtonStyle,
	dividerStyle,
	cardBoxStyle,
} from "@/components/MyPage/HabitHistory/HabitHistory.style";

const notEndHabitData = [
	{
		id: 12,
		isEnd: false,
		title: "오후 8시에 우리 집 안 내 책상 위에서 책 읽기 5 페이지",
		startDate: "2023. 12. 11.",
		successCount: 53,
		failCount: 13,
	},
	{
		id: 13,
		isEnd: false,
		title: "오후 8시에 우리 집 안 내 책상 위에서 책 읽기 5 페이지2",
		startDate: "2023. 12. 11.",
		successCount: 53,
		failCount: 13,
	},
];

const endHabitData = [
	{
		id: 14,
		isEnd: true,
		title: "오후 123시에 우리 집 안 내 책상 위에서 책 읽기 123 페이지",
		startDate: "2023. 12. 11.",
		endDate: "2024. 01. 03",
		successCount: 53,
		failCount: 13,
		endReason: "실천하기 어려운 습관이에요",
	},
	{
		id: 15,
		isEnd: true,
		title: "오후 123시에 우리 집 안 내 책상 위에서 책 읽기 123 페이지2",
		startDate: "2023. 12. 11.",
		endDate: "2024. 01. 03",
		successCount: 53,
		failCount: 13,
		endReason: "실천하기 어려운 습관이에요",
	},
];

const HabitHistory = () => {
	const [tab, setTab] = useState("실천 중");

	return (
		<>
			<ul css={listStyle}>
				<li>
					<button css={getButtonStyle(tab === "실천 중")} onClick={() => setTab("실천 중")}>
						실천 중
					</button>
				</li>
				<li>
					<button css={getButtonStyle(tab === "지난")} onClick={() => setTab("지난")}>
						지난
					</button>
				</li>
			</ul>
			<div css={dividerStyle} />
			<div css={cardBoxStyle}>
				{tab === "실천 중" &&
					notEndHabitData.map(({ id, isEnd, title, startDate, successCount, failCount }) => (
						<HabitCard
							key={title}
							id={id}
							isEnd={isEnd}
							title={title}
							startDate={startDate}
							successCount={successCount}
							failCount={failCount}
						/>
					))}

				{tab === "지난" &&
					endHabitData.map(
						({ id, isEnd, title, startDate, endDate, successCount, failCount, endReason }) => (
							<HabitCard
								key={title}
								id={id}
								isEnd={isEnd}
								title={title}
								startDate={startDate}
								endDate={endDate}
								successCount={successCount}
								failCount={failCount}
								endReason={endReason}
							/>
						),
					)}
			</div>
		</>
	);
};

export default HabitHistory;
