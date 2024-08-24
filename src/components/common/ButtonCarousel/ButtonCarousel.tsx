import { useState } from "react";

import type { HabitOneDayType } from "@/types/habit";

import {
	flexStyle,
	scrollBoxStyle,
	getButtonStyle,
} from "@/components/common/ButtonCarousel/ButtonCarousel.style";

const ButtonCarousel = ({ habitList }: { habitList: HabitOneDayType[] }) => {
	const [buttonText, setButtonText] = useState(habitList[0].action);

	return (
		<div css={flexStyle}>
			<div css={scrollBoxStyle}>
				{habitList.map((habit) => (
					<button
						type="button"
						css={getButtonStyle(buttonText === habit.action)}
						key={habit.action}
						onClick={() => setButtonText(habit.action)}
					>
						<p>{habit.action}</p>
					</button>
				))}
			</div>
		</div>
	);
};

export default ButtonCarousel;
