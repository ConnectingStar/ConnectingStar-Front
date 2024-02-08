import { useState } from "react";

import HabitCard from "@/components/MyPage/HabitHistory/HabitCard";

import {
	listStyle,
	getButtonStyle,
	dividerStyle,
	cardBoxStyle,
} from "@/components/MyPage/HabitHistory/HabitHistory.style";

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
				<HabitCard />
				<HabitCard />
				<HabitCard />
			</div>
		</>
	);
};

export default HabitHistory;
