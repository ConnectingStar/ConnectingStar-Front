import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	width: 22.5rem;
	margin: 0 auto;
	padding: 0 1.5rem calc(3.5rem + env(safe-area-inset-bottom));
`;

export const profileBoxStyle = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	margin: 3.125rem auto 1.25rem;
	width: fit-content;
`;

export const profileImgStyle = css`
	width: 6.25rem;
	height: 6.25rem;
	border-radius: 15px;
	background-color: #d9d9d9;
`;

export const profileTextBoxStyle = css`
	display: flex;
	align-items: center;

	& > p {
		${theme.font.header};
	}
`;

export const buttonBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 40px;
`;

export const buttonInnerBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 12px;

	& > h3 {
		color: ${theme.color.font_gray};
		${theme.font.body_b_bold};
	}
`;

export const dividerStyle = css`
	width: 100%;
	height: 0.5rem;
	background-color: ${theme.color.line};
	margin-top: 2.5rem;
`;

export const logoutButtonStyle = css`
	width: 100%;
	height: 3.625rem;
	color: ${theme.color.font_black};
`;
