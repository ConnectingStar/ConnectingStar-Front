import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	width: 22.5rem;
	margin: 0 auto;
	padding: 0 1.5rem 3rem;
`;

export const profileBoxStyle = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	margin: 3.125rem 0 1.25rem;

	& > a {
		display: flex;
		align-items: center;

		& > p {
			${theme.font.header};
		}
	}
`;

export const profileImgStyle = css`
	width: 6.25rem;
	height: 6.25rem;
	border-radius: 15px;
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
