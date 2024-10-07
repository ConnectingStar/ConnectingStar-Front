import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const mainBoxStyle = css`
	width: 22.5rem;
	margin: 0 auto;
	padding: 0 1.5rem 3.5rem;
	display: flex;
	flex-direction: column;
	gap: 20px;
	position: relative;
`;

export const mainTopBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding-top: calc(3.25rem + env(safe-area-inset-top));
`;

export const habitCountBoxStyle = css`
	display: flex;
	gap: 8px;
	align-items: center;

	& > p {
		${theme.font.head_b};
	}
`;

export const habitCountTextStyle = css`
	color: ${theme.color.main_blue};
`;

export const habitInfoBoxStyle = css`
	display: flex;
	gap: 6px;
	align-items: center;
`;

export const habitInfoTextStyle = css`
	${theme.font.body_xs};
	color: ${theme.color.main_blue};
`;

export const habitListBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 6px;
`;

export const addButtonStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 2.75rem;
	border-radius: 10px;
	border: 2px solid ${theme.color.line};
`;
