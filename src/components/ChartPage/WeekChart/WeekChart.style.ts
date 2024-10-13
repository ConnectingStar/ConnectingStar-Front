import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	background-color: ${theme.color.bg};
	width: 100%;
	border-top: 1px solid ${theme.color.line};
`;

export const boxStyle = css`
	width: 22.5rem;
	padding: 2.5rem 1.5rem max(3.625rem, calc(100vh - 44.5625rem)); // 디바이스 세로 길이 - 헤더에서 주간•월간 탭 까지 길이(44.5625)
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

export const emptyChartStyle = css`
	width: 28px;
	height: 100px;
	background-color: transparent;
`;

export const weekBoxStyle = css`
	display: flex;
	justify-content: space-between;
`;

export const weekStyle = (isRest?: boolean) => css`
	width: 2rem;
	height: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	${isRest ? theme.font.body_b : theme.font.head_c};
	border-radius: ${isRest && "50%"};
	background-color: ${isRest && theme.color.line};
	color: ${isRest ? theme.color.button_deactivated : theme.color.font_black};
`;
