import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const listStyle = css`
	width: 22.5rem;
	padding-top: 3.5rem;
	margin: 0 auto;
	display: flex;

	& > li {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		width: 50%;
		height: 3.5rem;
	}
`;

export const getButtonStyle = (isActive: boolean) => {
	return css`
		width: 3.75rem;
		border-bottom: ${isActive ? `4px solid ${theme.color.main_blue}` : `4px solid transparent`};
		padding: 0.625rem 0;
		color: ${isActive ? theme.color.main_blue : theme.color.button_deactivated};
		${theme.font.body_a_bold};
	`;
};

export const dividerStyle = css`
	background-color: ${theme.color.line};
	width: 22.5rem;
	height: 0.0625rem;
	margin: -0.3125rem auto 0;
`;

export const cardBoxStyle = css`
	width: 22.5rem;
	margin: 0 auto;
	padding: 1.25rem 1.5rem 0;
	display: flex;
	flex-direction: column;
	gap: 6px;
`;
