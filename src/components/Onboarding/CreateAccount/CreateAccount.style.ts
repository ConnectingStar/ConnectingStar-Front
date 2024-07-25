import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	width: 22.5rem;
	margin: 0 auto;
	padding: 4.75rem 1.5rem 0;

	& > h1 {
		${theme.font.head_a}
	}
`;

export const boxStyle = css`
	margin-top: 2.5rem;
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
`;

export const inputBoxStyle = (isActive: boolean) => css`
	& > h2 {
		${theme.font.head_c}
		color: ${theme.color.font_gray};
		margin-bottom: 0.75rem;
	}

	& > div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 3.4375rem;
		padding: 1rem;
		border-radius: 15px;
		background-color: ${theme.color.bg};
		color: ${isActive ? theme.color.font_black : theme.color.button_deactivated};
		margin-top: 0.75rem;
	}
`;
