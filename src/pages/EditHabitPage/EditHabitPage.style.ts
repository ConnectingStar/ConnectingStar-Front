import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	flex-direction: column;
	gap: 40px;
	width: 22.5rem;
	margin: 0 auto;
	padding: 4.75rem 1.25rem 0;
`;

export const habitMenuBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 6px;

	& > h3 {
		${theme.font.head_c}
		color: ${theme.color.font_gray}
	}
`;

export const notiMenuBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const quitButtonStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	width: 100%;
	left: 0;
	bottom: 0;
	border-top: 0.5rem solid ${theme.color.line};
	color: ${theme.color.error};
	height: 3.9375rem;
`;