import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	padding: 1.125rem 1.5rem 5.4375rem;
	border-radius: 15px 15px 0 0;
	color: ${theme.color.font_black};
	background-color: #fff;

	& > h1 {
		color: ${theme.color.font_black};
		${theme.font.header};
	}
`;

export const flexBoxStyle = css`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 6px;
	margin-top: 1.6875rem;

	& > button {
		padding: 1rem;
		background-color: ${theme.color.bg};
		color: ${theme.color.font_black};

		border-radius: 20px;

		&.select {
			background-color: ${theme.color.main_blue};
			color: #fff;
		}
	}
`;
