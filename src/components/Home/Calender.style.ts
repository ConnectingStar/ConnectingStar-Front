import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const calenderStyle = {
	dateWrapper: css`
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.625rem;
		.currentDate {
			${theme.font.head_a}
		}
		.currentYear {
			${theme.font.body_c}
			margin-left: 0.5rem;
		}
		.timeGap {
			${theme.font.button_big}
		}
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
	carouselEl: (props: { isSelected: boolean }) => css`
		display: flex;
		flex-direction: column;
		min-width: 2.5rem;
		border-radius: 8px;
		height: 100%;
		background-color: ${props.isSelected ? "rgba(1, 118, 249, 0.1)" : "none"};
	`,
	selected: css`
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
	dateInner: (props: { isPlanned: boolean }) => css`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 75%;
		height: auto;
		aspect-ratio: 1/1;
		color: black;
		border-radius: 50%;
		color: ${props.isPlanned ? "white" : "black"};
		background-color: ${props.isPlanned ? `${theme.color.main_blue}` : "none"};
	`,
};
