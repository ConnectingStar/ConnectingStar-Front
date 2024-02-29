import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const containerStyle = css`
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

export const layoutStyle = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 15.375rem;
	height: 22.5rem;
	gap: 20px;
`;

export const imageWrapperStyle = css`
	display: flex;
	border-radius: 15px;
	background-color: transparent;
	img {
		width: 13rem;
		height: 13rem;
		object-fit: cover;
	}
`;

export const prizeCommentStyle = css`
	white-space: pre-wrap;
	text-align: center;
	& > :first-of-type {
		${theme.font.head_a}
		& > .blue {
			color: ${theme.color.main_blue};
		}
		& > .yellow {
			color: ${theme.color.main_yellow};
		}
	}
	& > :nth-of-type(2) {
		${theme.font.body_a};
		color: white;
	}
`;
