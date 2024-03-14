import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	background-color: ${theme.color.bg};
	width: 100%;
`;

export const innerBoxStyle = css`
	width: 22.5rem;
	padding: 2.5rem 1.5rem 6rem;
	margin: 0 auto;
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
	padding: 1.25rem 1rem;
	border: 2px solid ${theme.color.line};
	border-radius: 15px;
	background-color: #fff;
`;

export const dividerStyle = css`
	border-bottom: 1px solid ${theme.color.line};
	margin-top: -0.875rem;
`;

export const chartTextStyle = css`
	display: flex;
	justify-content: space-between;
	${theme.font.body_xs};
	color: ${theme.color.font_black};
`;

export const infoBoxStyle = css`
	display: flex;
	align-items: center;
	gap: 8px;
	margin-top: 1.25rem;

	& .divider {
		width: 1.25rem;
		border-bottom: 1px dashed #ffbb00;
	}

	& > span {
		${theme.font.body_b};
		color: ${theme.color.font_black};
	}
`;
