import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	width: 22.5rem;
	margin: 0 auto;
	padding: 2.125rem 1.5rem 1rem;
	display: flex;
	flex-direction: column;
	gap: 40px;
`;

export const topBoxStyle = css`
	display: flex;
	flex-direction: column;

	& > p {
		color: ${theme.color.font_black};
	}
`;

export const notificationBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 6px;

	& > h3 {
		color: ${theme.color.font_gray};
		${theme.font.head_c};
	}
`;
