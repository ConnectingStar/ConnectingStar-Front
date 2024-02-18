import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	padding: 1.125rem 1.5rem;
	border-radius: 15px 15px 0 0;
	color: ${theme.color.font_black};
	background-color: #fff;

	& > h1 {
		color: ${theme.color.font_black};
		${theme.font.header};
	}
`;

export const buttonBoxStyle = css`
	display: flex;
	align-items: center;
	gap: 8px;
	margin-top: 1rem;

	& > button {
		width: 50%;
		height: 3.4375rem;
		border-radius: 15px;
		color: #fff;
		background-color: ${theme.color.main_blue};
		${theme.font.button_big};

		&.cancel {
			background-color: ${theme.color.button_disabled};
			color: ${theme.color.button_deactivated};
		}
	}
`;
