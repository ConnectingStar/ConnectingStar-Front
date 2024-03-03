import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	background-color: ${theme.color.bg};
	width: 100%;
`;

export const boxStyle = css`
	width: 22.5rem;
	padding: 2.5rem 1.5rem 3.625rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 20px;

	& > h2 {
		${theme.font.head_a}

		& > span {
			color: ${theme.color.main_blue};
		}
	}
`;

export const calendarBoxStyle = css`
	background-color: #fff;
	border-radius: 15px;
	border: 2px solid ${theme.color.line};
	padding: 1rem 0.875rem;
`;
