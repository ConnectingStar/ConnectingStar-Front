import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	width: 18rem;
	border-radius: 15px;
	background-color: #fff;
	padding: 1rem;

	& > h1 {
		font-size: 1.125rem;
		font-weight: 700;
		margin-bottom: 1.25rem;
	}

	& > h2 {
		margin-bottom: 0.375rem;
		${theme.font.header};
	}
`;

export const behaviorBoxStyle = css`
	display: flex;
	align-items: center;
	gap: 6px;
	margin-bottom: 1.25rem;

	& > span {
		${theme.font.body_b};
	}

	& > div {
		width: 0.188rem;
		height: 0.188rem;
		border-radius: 50%;
		background-color: ${theme.color.font_black};
	}
`;

export const closeButtonBoxStyle = css`
	width: 100%;
	display: flex;
	justify-content: center;

	& > button {
		margin-top: 1rem;
		color: ${theme.color.font_gray};
		${theme.font.button_big};
	}
`;
