import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	width: 100%;
	height: 25.4375rem;
	padding: 1.125rem 1.5rem;
	border-radius: 15px 15px 0 0;
	color: ${theme.color.font_black};
	background-color: #fff;

	& > h1 {
		${theme.font.header};
		margin-bottom: 0.6875rem;
	}

	& > ul > li {
		display: flex;
		align-items: center;
		height: 3.625rem;
	}
`;
