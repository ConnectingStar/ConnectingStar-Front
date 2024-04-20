import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const containerStyle = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	width: 22.5rem;
	height: 100vh;
`;

export const imageWrapperStyle = css`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 13rem;
	min-height: 13rem;
	border-radius: 15px;

	& > div {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		object-fit: contain;
		width: 22.5rem;
		height: 22.5rem;
	}
`;

export const prizeCommentStyle = css`
	white-space: pre-wrap;
	text-align: center;

	& > div:first-of-type {
		${theme.font.head_a};
		margin-bottom: 0.5rem;
		color: ${theme.color.main_blue};

		& > span:nth-of-type(2) {
			color: ${theme.color.main_yellow};
		}
	}

	& > div:nth-of-type(2) {
		${theme.font.body_a};
		color: white;
	}
`;
