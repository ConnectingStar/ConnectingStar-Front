import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const CalenderStyle = {
	container: css`
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-bottom: 20px;
	`,
	date: css`
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 4rem;
	`,

	targetDate: css`
		display: flex;
		align-items: center;
		height: 100%;
	`,
	timeDiff: css`
		display: flex;
		align-items: center;
		height: 100%;
	`,
	carouselWrapper: css`
		position: relative;
		overflow-x: scroll;
		scrollbar-width: none;
		width: 100%;
		height: 6rem;
	`,
	carouselButtonLayer: css`
		position: absolute;
		display: block;
		width: 100%;
		height: 100%;
	`,
	carousel: css`
		display: flex;
		height: 100%;
		gap: 0.25rem;
	`,
	carouselEl: css`
		display: flex;
		flex-direction: column;
		min-width: 4rem;
		border-radius: 8px;
		//임시 배경
		background-color: white;
		height: 100%;
		//임시 border
		border: 1px solid black;
	`,
	dayPart: css`
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	datePart: css`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: auto;
		aspect-ratio: 9/11;
	`,
	dateInner: css`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 75%;
		height: auto;
		aspect-ratio: 1/1;
		border-radius: 50%;
		color: white;
		background-color: ${theme.color.main_blue};
	`,
};
