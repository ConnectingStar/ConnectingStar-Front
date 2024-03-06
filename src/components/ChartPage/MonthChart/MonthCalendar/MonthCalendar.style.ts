import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const headerLayoutStyle = css`
	display: flex;
	align-items: center;
	gap: 16px;

	& > svg {
		width: 20px;
		height: 20px;
	}
`;

export const headerBoxStyle = css`
	display: flex;
	align-items: center;
	text-align: center;

	& > h1 {
		${theme.font.head_a}
		width: 56px;
	}

	& > p {
		${theme.font.body_xs}
		width: 46px;
		text-align: center;
	}
`;

export const dateBoxStyle = css`
	display: flex;
	flex-wrap: wrap;
`;

export const dayStyle = (inMonthDay?: boolean, isWeek?: boolean, day?: number) => {
	return css`
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		color: ${inMonthDay ? theme.color.font_black : theme.color.button_deactivated};
		${isWeek ? theme.font.body_b : theme.font.body_b_bold}

		& > p {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 1.75rem;
			height: 1.75rem;
			border-radius: 50%;

			// api 연결 후 데이터마다 변경 예정
			// 해당 방식으로 사용할 예정은 아님 예시용
			background-color: ${day === 1 && theme.color.very_bad};
			background-color: ${day === 2 && theme.color.bad};
			background-color: ${day === 3 && theme.color.normal};
			background-color: ${day === 4 && theme.color.good};
			background-color: ${day === 5 && theme.color.very_good};
			background-color: ${day === 6 && theme.color.line};
		}
	`;
};

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
