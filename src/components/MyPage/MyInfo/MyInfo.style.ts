import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	width: 360px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const mainBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 40px;
	align-items: center;
	width: 100%;
	padding: 1.25rem 1.5rem 0;
`;

export const characterBoxStyle = css`
	width: 312px;
	height: 312px;
	border-radius: 15px;
	background-color: #d9d9d9;
	position: relative;

	& > button {
		width: 124px;
		height: 55px;
		border-radius: 15px;
		border: 2px solid ${theme.color.main_Blue};
		background-color: #fff;
		position: absolute;
		left: 5.875rem;
		bottom: 1.125rem;

		& > p {
			color: ${theme.color.main_Blue};
			font-weight: 500;
			line-height: 24px;
		}
	}
`;

export const buttonBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 12px;

	& > h3 {
		color: ${theme.color.font_gray};
		${theme.font.body_b_bold};
	}
`;

export const dividerStyle = css`
	width: 360px;
	height: 8px;
	background-color: ${theme.color.line};
	margin-top: 2.5rem;
`;

export const authListStyle = css`
	width: 100%;

	& > li {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 58px;
		color: ${theme.color.font_black};

		&:last-of-type {
			color: ${theme.color.error};
		}
	}
`;
