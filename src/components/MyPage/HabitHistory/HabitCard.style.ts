import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	height: 6.25rem;
	border-radius: 15px;
	background-color: ${theme.color.bg};
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 6px;

	& > h1 {
		${theme.font.body_a_bold};
		max-width: 15rem;
	}

	& > p > span {
		position: relative;
		margin-right: 1rem;
		color: ${theme.color.button_deactivated};
		${theme.font.body_c};

		&::after {
			content: "ㅣ";
			color: ${theme.color.button_disabled};
			position: absolute;
			top: 0;
			right: -0.875rem;
		}

		&:last-of-type::after {
			content: none;
		}
	}
`;
