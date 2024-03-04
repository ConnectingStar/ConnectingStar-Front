import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const getLayoutStyle = (isDateText: boolean | undefined, isHabit: boolean | undefined) => {
	return css`
		width: 19.5rem;
		border-radius: 15px;
		background-color: ${isHabit ? "rgb(224, 239, 253)" : theme.color.bg};
		padding: 1rem;
		margin-top: 0.375rem;

		& > h4 {
			color: ${isDateText || isHabit ? theme.color.main_blue : theme.color.button_deactivated};
			${!isDateText ? theme.font.body_c : isHabit ? theme.font.body_b : theme.font.body_a};
			margin-top: 0.125rem;
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
};

export const getFlexStyle = (isHabit: boolean | undefined) => {
	return css`
		display: flex;
		justify-content: space-between;
		align-items: center;

		& > h3 {
			color: ${isHabit ? theme.color.main_blue : theme.color.font_black};
			${theme.font.body_a_bold};
		}
	`;
};

export const getToggleButtonStyle = (isActive: boolean) => {
	return css`
		display: flex;
		align-items: center;
		position: relative;
		width: 2.875rem;
		height: 1.5rem;
		border-radius: 16px;
		background-color: ${isActive ? theme.color.main_blue : theme.color.button_deactivated};

		& > div {
			width: 1.25rem;
			height: 1.25rem;
			border-radius: 100%;
			position: absolute;
			background-color: #fff;
			left: ${isActive ? "calc(100% - 22px)" : "2px"};
			transition: left 0.5s ease;
		}
	`;
};
