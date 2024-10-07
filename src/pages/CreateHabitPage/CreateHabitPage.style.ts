import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 22.5rem;
	margin: 0 auto;
	padding: calc(4.75rem + env(safe-area-inset-top)) 1.5rem 1.25rem;
`;

export const profileBoxStyle = css`
	display: flex;
	align-items: center;
	gap: 16px;
	padding: 1rem 0.75rem;
	border-radius: 15px;
	height: 5.9375rem;
	background-color: ${theme.color.bg};
	margin-bottom: 0.375rem;
	${theme.font.body_b};

	& > img {
		width: 3.625rem;
		height: 3.625rem;
		object-fit: contain;
	}

	& > div {
		white-space: pre-wrap;

		& > p:first-of-type {
			${theme.font.head_b}
		}
	}
`;

export const inputListStyle = css`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const inputBoxStyle = css`
	${theme.font.body_a};

	& > span {
		${theme.font.head_c};
		color: ${theme.color.font_gray};
	}
`;

export const inputUnitBoxStyle = css`
	display: flex;
	align-items: center;
	gap: 6px;
`;

export const inputTitleStyle = css`
	display: flex;
	align-items: center;
	gap: 8px;

	& > span {
		${theme.font.head_c};
		color: ${theme.color.font_gray};

		&.infoText {
			color: ${theme.color.main_blue};
			${theme.font.body_xs};
			font-weight: 400;
		}
	}
`;

export const inputStyle = (isActive: boolean, width?: string) => css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 3.4375rem;
	padding: 1rem;
	border-radius: 15px;
	color: ${isActive ? theme.color.font_black : theme.color.button_deactivated};
	background-color: ${theme.color.bg};
	margin-top: 0.75rem;
	width: ${width};
`;

export const selectBoxStyle = css`
	display: flex;
	align-items: center;
	height: 3.4375rem;
	padding: 1rem;
	border-radius: 15px;
	color: ${theme.color.button_deactivated};
	background-color: ${theme.color.bg};
`;
