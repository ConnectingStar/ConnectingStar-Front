import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	align-items: center;
	gap: 6px;
	padding: 0.4375rem 1.5rem 0;
	max-width: 22.5rem;
	margin: 0 auto;
`;

export const sortButtonStyle = css`
	width: 6.0625rem;
	height: 2.25rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
	border-radius: 20px;
	border: 2px solid ${theme.color.button_disabled};

	& > p {
		color: ${theme.color.font_black};
		${theme.font.body_b};
	}

	& > svg {
		margin-top: 0.0625rem;
	}
`;

export const buttonStyle = (isRest: boolean) => css`
	width: 3.625rem;
	height: 2.25rem;
	border-radius: 20px;
	background-color: ${isRest ? theme.color.main_deep_blue : theme.color.white};
	border: 2px solid ${isRest ? "transparent" : theme.color.button_disabled};
	color: ${isRest ? theme.color.white : theme.color.black};
	${theme.font.body_b};
`;
