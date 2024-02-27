import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	width: 22.5rem;
	margin: 0 auto;
	padding: 1.25rem 1.5rem 0;
	display: flex;
	align-items: center;
	gap: 6px;
`;

export const infoBoxStyle = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 50%;
	height: 5.4375rem;
	border-radius: 15px;
	border: 2px solid ${theme.color.line};

	& > h2 {
		${theme.font.head_c}
		color: ${theme.color.font_gray};
	}

	& > h3 {
		${theme.font.head_a};
		color: ${theme.color.font_black};
	}
`;
