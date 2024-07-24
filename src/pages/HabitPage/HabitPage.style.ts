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
	padding-top: 3.25rem;
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
