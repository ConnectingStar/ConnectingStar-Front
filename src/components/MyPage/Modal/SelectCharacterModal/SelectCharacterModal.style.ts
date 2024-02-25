import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	width: 100%;
	padding: 1.125rem 1.5rem;
	border-radius: 15px 15px 0 0;
	color: ${theme.color.font_black};
	background-color: #fff;

	& > h1 {
		color: ${theme.color.font_black};
		${theme.font.header};
	}
`;

export const characterWrapperStyle = css`
	margin: 0.6875rem 0 1rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	row-gap: 0.375rem;
`;

export const getCharacterBoxStyle = (isSelect: boolean) => {
	return css`
		width: 6.25rem;
		height: 6.25rem;
		border-radius: 15px;
		background-color: #d9d9d9;
		border: ${isSelect ? `5px solid ${theme.color.main_blue}` : "none"};
	`;
};
