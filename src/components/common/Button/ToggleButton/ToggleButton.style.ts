import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const getLayoutStyle = (isDateText: boolean | undefined, hasToggle?: boolean) => css`
	width: 19.5rem;
	border-radius: 15px;
	background-color: ${theme.color.bg};
	padding: 1rem;
	margin-top: 0.375rem;

	& > h4 {
		color: ${isDateText ? theme.color.main_blue : theme.color.button_deactivated};
		${!isDateText ? theme.font.body_c : theme.font.body_a};
		margin-top: 0.125rem;
		max-width: ${hasToggle ? "13.625rem" : ""};
	}

	& > button {
		width: 17.5rem;
		height: 3.4375rem;
		margin-top: 1rem;
		border-radius: 15px;
		background-color: ${theme.color.main_blue};
		${theme.font.head_b};
		color: #fff;
	}
`;

export const getFlexStyle = css`
	display: flex;
	justify-content: space-between;
	align-items: center;

	& > h3 {
		color: ${theme.color.font_black};
		${theme.font.body_a_bold};

		& > span {
			color: ${theme.color.main_blue};
			${theme.font.body_a};
			padding-left: 20px;
		}
	}
`;
