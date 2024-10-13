import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	width: 22.5rem;
	margin: 0 auto;
	padding: calc(5.625rem + env(safe-area-inset-top)) 1.5rem 1rem;
	display: flex;
	flex-direction: column;
	gap: 40px;
`;

export const topBoxStyle = css`
	display: flex;
	flex-direction: column;

	& > p {
		color: ${theme.color.font_black};
	}
`;

export const notificationBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 6px;

	& > h3 {
		color: ${theme.color.font_gray};
		${theme.font.head_c};
	}
`;

export const homeButtonBoxStyle = css`
	width: 19.5rem;
	border-radius: 15px;
	background-color: rgb(224, 239, 253);
	padding: 1rem;
	margin-top: 0.375rem;

	& > h3 {
		color: ${theme.color.main_blue};
		${theme.font.body_a_bold};
	}

	& > h4 {
		color: ${theme.color.main_blue};
		${theme.font.body_b};
		margin-top: 0.125rem;
	}

	& > button {
		width: 17.5rem;
		height: 3.4375rem;
		margin-top: 1rem;
		border-radius: 15px;
		background-color: ${theme.color.main_blue};
		${theme.font.head_b};
		color: #fff;
	}
`;
