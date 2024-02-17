import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	width: 18rem;
	padding: 1rem;
	border-radius: 15px;
	background-color: #fff;
	color: ${theme.color.font_black};
	display: flex;
	flex-direction: column;
	gap: 40px;

	& > h1 {
		font-size: 1.125rem;
		font-weight: 700;
	}
`;

export const buttonBoxStyle = css`
	display: flex;
	align-items: center;
	gap: 8px;

	& > button {
		width: 50%;
		height: 3.4375rem;
		border-radius: 15px;
		color: #fff;
		background-color: ${theme.color.main_blue};
		${theme.font.head_b};

		&.cancel {
			background-color: ${theme.color.button_disabled};
			color: ${theme.color.button_deactivated};
		}
	}
`;
