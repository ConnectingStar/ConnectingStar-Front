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

	& > h3 {
		${theme.font.head_a};

		& > span {
			color: ${theme.color.main_blue};
		}
	}
`;

export const chartBoxStyle = css`
	width: 100%;
	padding: 1rem 1rem 0.5rem;
	border-radius: 15px;
	border: 2px solid ${theme.color.line};
	margin-top: 1.25rem;
	background-color: #fff;
	display: flex;
	flex-direction: column;
`;

export const dateBoxStyle = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	${theme.font.body_b};
`;

export const chartStyle = css`
	height: 8.75rem;
	margin: 1.25rem 0 0.25rem;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding: 0 0.125rem;
`;

export const weekBoxStyle = css`
	display: flex;
	justify-content: space-between;

	& > p {
		width: 2rem;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		${theme.font.head_c};
		color: ${theme.color.font_black};
	}
`;
