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

export const textBoxStyle = css`
	padding: 1rem;
	border-radius: 15px;
	background-color: ${theme.color.bg};
	max-width: 248px;

	& > p {
		${theme.font.body_b};
		white-space: pre-wrap;
	}
`;
