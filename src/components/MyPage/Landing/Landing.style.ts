import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	width: 360px;
	margin: 0 auto;
	padding: 0.625rem 1.5rem 3rem;
`;

export const headingStyle = css`
	${theme.font.head_a};
`;

export const profileBoxStyle = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	margin: 3.125rem 0 1.25rem;

	& > a {
		display: flex;

		& > p {
			${theme.font.header};
		}
	}
`;

export const profileImgStyle = css`
	width: 100px;
	height: 100px;
	border-radius: 16px;
	background-color: #d9d9d9;
`;

export const buttonBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 12px;

	& > h3 {
		color: ${theme.color.font_gray};
		${theme.font.body_b_bold};
		margin-top: 2.5rem;
	}
`;
