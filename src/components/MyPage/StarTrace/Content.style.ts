import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	& > h3 {
		color: ${theme.color.button_deactivated};
		${theme.font.body_c};
	}

	& > h4 {
		${theme.font.body_b_bold};
	}
`;

export const contentBoxStyle = css`
	display: flex;
	gap: 16px;
	margin-top: 0.75rem;
`;

export const iconBoxStyle = css`
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	background-color: ${theme.color.button_disabled};
`;

export const textBoxStyle = css`
	padding: 1rem;
	border-radius: 15px;
	background-color: ${theme.color.bg};
	max-width: 15.5rem;

	& > p {
		${theme.font.body_b};
		white-space: pre-wrap;
		max-height: 12rem;
		overflow: auto;
		scrollbar-width: none;
		-ms-overflow-style: none;

		::-webkit-scrollbar {
			display: none;
		}
	}
`;
