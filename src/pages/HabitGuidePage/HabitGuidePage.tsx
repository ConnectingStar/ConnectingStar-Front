import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ArrowIcon from "@/assets/icon/ic-arrow-left.svg?react";

import Header from "@/components/common/Header/Header";

import { HABIT_GUIDE_DATA } from "@/constants/habit";

import {
	layoutStyle,
	listStyle,
	titleStyle,
	paragraphStyle,
} from "@/pages/HabitGuidePage/HabitGuidePage.style";

function HabitGuidePage() {
	const navigate = useNavigate();

	const [activeIndex, setActiveIndex] = useState<string>("");

	const handleGuideButton = (idx: string) => {
		idx === activeIndex ? setActiveIndex("") : setActiveIndex(idx);
	};

	return (
		<>
			<Header>
				<Header.Title>습관 도움말</Header.Title>
				<Header.PrevButton onClick={() => navigate("/")} />
			</Header>

			<div css={layoutStyle}>
				<ul css={listStyle}>
					{HABIT_GUIDE_DATA.map(({ index, title, paragraph }) => (
						<li key={title}>
							<div css={titleStyle(activeIndex === index)} onClick={() => handleGuideButton(index)}>
								<div>
									<h1>{index}</h1>
									<h2>{title}</h2>
								</div>

								<ArrowIcon />
							</div>
							<div css={paragraphStyle(activeIndex === index)}>{paragraph}</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default HabitGuidePage;
