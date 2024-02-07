import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const flexStyle = css`
	overflow: hidden;
	white-space: nowrap;
	padding: 0.5rem 1.5rem 0;
	max-width: 360px;
	margin: 0 auto;
`;

export const scrollBoxStyle = css`
	display: inline-block;
	white-space: nowrap;
	transition-duration: 0.15s;
	transition-timing-function: cubic-bezier(0.05, 0, 0, 1);
	will-change: transform;
	overflow: hidden;
`;

export const getButtonStyle = (isActive: boolean) => {
	return css`
		padding: 1rem;
		border-radius: 0.9375rem;
		background-color: ${theme.color.main_Blue};
		background-color: ${isActive ? theme.color.main_Blue : theme.color.button_disabled};
		${theme.font.body_a_bold};
		color: ${isActive ? "#fff" : theme.color.button_deactivated};
		margin-right: 6px;
	`;
};
