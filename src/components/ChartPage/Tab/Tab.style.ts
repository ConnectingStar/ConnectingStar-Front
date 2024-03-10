import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	width: 22.5rem;
	margin: 0 auto;
	padding: 0 1.5rem;
	display: flex;
	align-items: center;

	& > li {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50%;
		height: 3.5rem;
	}
`;

export const tabButtonStyle = (isActive: boolean) => {
	return css`
		width: 3.75rem;
		border-bottom: ${isActive ? `4px solid ${theme.color.main_blue}` : `4px solid transparent`};
		padding: 0.9rem 0;
		color: ${isActive ? theme.color.main_blue : theme.color.button_deactivated};
		${theme.font.body_a_bold};
	`;
};
