import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 3.5rem;
`;

export const profileBoxStyle = css`
	display: flex;
	gap: 12px;

	& > img {
		width: 2.5rem;
		height: 2.5rem;
		object-fit: contain;
		border-radius: 4px;
	}
`;

export const profileTextBoxStyle = css`
	display: flex;
	flex-direction: column;

	& > span {
		&:first-of-type {
			${theme.font.body_c_bold};
			color: ${theme.color.main_blue};
		}

		&:last-of-type {
			${theme.font.body_b_bold}
		}
	}
`;
