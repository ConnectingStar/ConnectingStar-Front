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
