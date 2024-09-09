import { useState } from "react";

import type { HabitOneDayType } from "@/types/habit";

import {
	flexStyle,
	scrollBoxStyle,
	getButtonStyle,
} from "@/components/common/ButtonCarousel/ButtonCarousel.style";

interface ButtonCarouselProps {
	habitList: HabitOneDayType[];
	handleHabitId: (habitId: number) => void;
}

const ButtonCarousel = ({ habitList, handleHabitId }: ButtonCarouselProps) => {
	const [buttonText, setButtonText] = useState(habitList[0].action);

	return (
		<div css={flexStyle}>
			<div css={scrollBoxStyle}>
				{habitList.map((habit, index) => (
					<button
						type="button"
						css={getButtonStyle(buttonText === habit.action)}
						key={`${habit.action}${index}`}
						onClick={() => {
							setButtonText(habit.action);
							handleHabitId(habit.runHabitId);
						}}
					>
						<p>{habit.action}</p>
					</button>
				))}
			</div>
		</div>
	);
};

export default ButtonCarousel;
