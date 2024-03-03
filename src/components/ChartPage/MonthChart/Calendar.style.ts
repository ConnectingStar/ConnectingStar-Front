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
`;

export const dayStyle = (inMonthDay?: boolean, isWeek?: boolean) => {
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
		}
	`;
};
