import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const calenderStyle = {
	date: css`
		display: flex;
		justify-content: space-between;
		align-items: center;
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
		height: 5rem;
	`,
	carousel: css`
		display: flex;
		height: 100%;
		gap: 0.25rem;
	`,
	carouselEl: css`
		display: flex;
		flex-direction: column;
		min-width: 2.5rem;
		border-radius: 8px;
		height: 100%;
	`,
	targeted: css`
		display: flex;
		flex-direction: column;
		min-width: 2.5rem;
		border-radius: 8px;
		height: 100%;
		background-color: rgba(1, 118, 249, 0.1);
	`,
	dayPart: css`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 40%;
		${theme.font.body_b}
	`,
	datePart: css`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 60%;
		${theme.font.body_b_bold};
	`,
	dateInner: css`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 75%;
		height: auto;
		aspect-ratio: 1/1;
		color: black;
		border-radius: 50%;
	`,
	planned: css`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90%;
		border-radius: 50%;
		height: auto;
		aspect-ratio: 1/1;
		color: white;
		background-color: ${theme.color.main_blue};
	`,
};
