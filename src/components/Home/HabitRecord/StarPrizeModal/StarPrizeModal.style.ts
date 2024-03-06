import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const containerStyle = css`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 22.5rem;
	height: 100vh;
`;

export const layoutStyle = css`
	display: flex;
	flex-direction: column;
	width: 15.375rem;
	gap: 20px;
`;

export const imageWrapperStyle = css`
	border-radius: 15px;
	img {
		width: 13rem;
		height: 13rem;
		object-fit: contain;
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
