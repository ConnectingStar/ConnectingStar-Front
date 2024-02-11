import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	width: 22.5rem;
	height: calc(100vh - 4.4375rem);
	margin: 0 auto;
	padding: 1.25rem 1.5rem 0;
	position: relative;

	& > h1 {
		color: #000;
		${theme.font.head_a};
	}

	& > button {
		width: 19.5rem;
		height: 3.4375rem;
		border-radius: 15px;
		background-color: ${theme.color.main_blue};
		opacity: 0.4;
		color: #fff;
		${theme.font.button_big};
		position: absolute;
		bottom: 0;
	}
`;

export const reasonBoxStyle = css`
	display: flex;
	align-items: center;
	margin-top: 2.5rem;
	position: relative;
	width: 19.5rem;
	height: 3.4375rem;
	padding-left: 1rem;
	background-color: ${theme.color.bg};
	border-radius: 15px;

	& > p {
		color: ${theme.color.button_deactivated};
	}

	& > svg {
		position: absolute;
		right: 1rem;
	}
`;
