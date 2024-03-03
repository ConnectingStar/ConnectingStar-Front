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
