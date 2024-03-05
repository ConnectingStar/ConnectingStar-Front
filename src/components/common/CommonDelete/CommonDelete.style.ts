import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	width: 22.5rem;
	height: calc(100vh - 4.4375rem);
	margin: 0 auto;
	padding: 1.25rem 1.5rem 0;

	& > h1 {
		${theme.font.head_a};
	}
`;

export const getReasonBoxStyle = (isSelected: boolean) => {
	return css`
		display: flex;
		align-items: center;
		margin-top: 2.5rem;
		position: relative;
		width: 19.5rem;
		height: 3.4375rem;
		padding-left: 1rem;
		background-color: ${theme.color.bg};
		border-radius: 15px;

		& > p {
			color: ${isSelected ? theme.color.font_black : theme.color.button_deactivated};
		}

		& > svg {
			position: absolute;
			right: 1rem;
		}
	`;
};

export const middleBoxStyle = css`
	margin-top: 0.375rem;
`;

export const textBoxStyle = css`
	& > textarea {
		all: unset;
		box-sizing: border-box;
		display: block;
		width: 19.5rem;
		height: 11.9375rem;
		border-radius: 15px;
		padding: 1rem;
		background-color: ${theme.color.bg};
		color: ${theme.color.font_black};

		&::placeholder {
			color: ${theme.color.button_deactivated};
		}
	}
`;

export const subTextBoxStyle = css`
	height: calc(100vh - 29.8875rem);
	display: flex;
	justify-content: center;
	align-items: center;

	& > p {
		white-space: pre-wrap;
		text-align: center;
	}
`;
