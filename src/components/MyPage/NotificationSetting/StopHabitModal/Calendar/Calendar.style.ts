import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const headerLayoutStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	margin-top: 2rem;
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
	margin: 1.25rem auto;
	row-gap: 20px;
`;

export const dayStyle = (inMonthDay?: boolean) => {
	return css`
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.75rem;
		height: 2.75rem;
		color: ${inMonthDay ? theme.color.font_black : theme.color.button_deactivated};
		${theme.font.body_a_bold};
	`;
};
