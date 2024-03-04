import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	background-color: ${theme.color.bg};
	width: 100%;
`;

export const innerBoxStyle = css`
	width: 22.5rem;
	padding: 2.5rem 1.5rem 4rem;
	margin: 0 auto;
`;

export const calendarSectionStyle = css`
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

	& .divider {
		width: 100%;
		border-bottom: 1px solid ${theme.color.line};
		margin: 1rem 0;
	}
`;

export const iconListBoxStyle = css`
	display: flex;
	align-items: center;
	gap: 30px;

	& .iconBox {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;

		& > p {
			color: ${theme.color.font_black};
			${theme.font.header};
		}
	}
`;

export const chartSectionStyle = css`
	margin-top: 2.5rem;

	& > h1 {
		${theme.font.head_a}

		& > span {
			color: ${theme.color.main_blue};
		}
	}
`;

export const chartBoxStyle = css`
	margin-top: 1.25rem;
	padding: 1rem;
	border: 2px solid ${theme.color.line};
	border-radius: 15px;
	background-color: #fff;
`;
