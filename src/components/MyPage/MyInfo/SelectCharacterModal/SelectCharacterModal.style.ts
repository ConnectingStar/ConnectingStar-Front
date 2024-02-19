import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	width: 100%;
	height: 41.875rem;
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
	margin-top: 0.6875rem;
	display: flex;
	flex-wrap: wrap;
	height: 32.875rem;
	justify-content: space-between;
	align-content: space-between;
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

export const buttonBoxStyle = css`
	display: flex;
	align-items: center;
	gap: 8px;
	margin-top: 1rem;

	& > button {
		width: 50%;
		height: 3.4375rem;
		border-radius: 15px;
		color: #fff;
		background-color: ${theme.color.main_blue};
		${theme.font.button_big};

		&.cancel {
			background-color: ${theme.color.button_disabled};
			color: ${theme.color.button_deactivated};
		}
	}
`;
