import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const headerLayoutStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	margin-top: 2rem;

	& > svg {
		width: 20px;
		height: 20px;
	}
`;

export const headerBoxStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
	width: 6.625rem;

	& > h1 {
		${theme.font.head_a}
	}

	& > p {
		${theme.font.body_xs}
	}
`;

export const dateBoxStyle = css`
	display: flex;
	flex-wrap: wrap;
	width: 19.25rem;
	margin: 1.25rem auto 5rem;
	row-gap: 20px;
`;

export const dayStyle = (
	inMonthDay?: boolean,
	isWeek?: boolean,
	startDate?: boolean,
	endDate?: boolean,
) => {
	return css`
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.75rem;
		height: 2.75rem;
		color: ${inMonthDay ? theme.color.font_black : theme.color.button_deactivated};
		${isWeek ? theme.font.body_b : theme.font.body_b_bold}

		& > p {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 1.875rem;
			height: 1.875rem;
			border-radius: ${(startDate || endDate) && "50%"};
			background-color: ${(startDate || endDate) && theme.color.main_blue};
			color: ${(startDate || endDate) && "#fff"};
		}
	`;
};
