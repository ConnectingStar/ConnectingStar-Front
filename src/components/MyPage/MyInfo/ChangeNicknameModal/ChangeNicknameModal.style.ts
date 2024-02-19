import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	padding: 1.125rem 1.5rem 1rem;
	border-radius: 15px 15px 0 0;
	color: ${theme.color.font_black};
	background-color: #fff;

	& > h1 {
		color: ${theme.color.font_black};
		${theme.font.header};
	}

	& > input {
		all: unset;
		box-sizing: border-box;
		width: 100%;
		height: 3.4375rem;
		border-radius: 15px;
		margin-top: 1.6875rem;
		background-color: ${theme.color.bg};
		color: ${theme.color.font_black};
		padding: 1rem;
	}
`;

export const buttonBoxStyle = css`
	display: flex;
	align-items: center;
	/* margin-top: 1rem; */

	& > button {
		width: 50%;
		height: 3.4375rem;
		color: #fff;
		background-color: ${theme.color.main_blue};
		${theme.font.button_big};

		&.cancel {
			background-color: ${theme.color.button_disabled};
			color: ${theme.color.button_deactivated};
		}
	}
`;
