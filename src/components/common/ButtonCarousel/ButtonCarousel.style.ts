import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const flexStyle = css`
	white-space: nowrap;
	padding: calc(4rem + env(safe-area-inset-top)) 1.5rem 0;
	max-width: 22.5rem;
	margin: 0 auto;
	overflow: auto;
	scrollbar-width: none;

	::-webkit-scrollbar {
		display: none;
	}
`;

export const scrollBoxStyle = css`
	display: inline-block;
	white-space: nowrap;
	overflow: hidden;
`;

export const getButtonStyle = (isActive: boolean) => {
	return css`
		padding: 1rem;
		border-radius: 15px;
		background-color: ${isActive ? theme.color.main_blue : theme.color.button_disabled};
		${theme.font.body_a_bold};
		color: ${isActive ? "#fff" : theme.color.button_deactivated};
		margin-right: 0.375rem;
	`;
};
