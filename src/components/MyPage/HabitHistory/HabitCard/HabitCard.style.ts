import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	border-radius: 15px;
	background-color: ${theme.color.bg};
	padding: 1rem;
	position: relative;

	& > svg {
		position: absolute;
		right: 1rem;
		top: 1rem;
	}

	& > h1 {
		${theme.font.body_a_bold};
		max-width: 15rem;
		margin-bottom: 0.375rem;
	}
`;

export const textBoxStyle = css`
	display: flex;
	flex-direction: column;
`;

export const textStyle = css`
	height: 1.0625rem;
	line-height: 1.0625rem;

	& > span {
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
