import { css } from "@emotion/react";

import CheckIcon from "@/assets/icon/ic-check.svg";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	padding: 1.125rem 1.5rem 1.25rem;
	border-radius: 15px 15px 0 0;
	color: ${theme.color.font_black};
	background-color: #fff;

	& > h1 {
		margin-bottom: 0.6875rem;
		color: ${theme.color.font_black};
		${theme.font.header};
	}

	& > ul {
		display: flex;
		flex-direction: column;

		& > li {
			display: flex;
			align-items: center;
		}
	}
`;

export const getCheckBoxLabelStyle = css`
	display: flex;
	align-items: center;
	gap: 20px;
	width: 100%;
	height: 100%;
	padding: 1.0625rem 0;

	input[type="radio"] {
		appearance: none;
		width: 1.5rem;
		height: 1.5rem;
		border: 1px solid ${theme.color.button_disabled};
		border-radius: 4px;
	}

	input[type="radio"]:checked {
		border: 1px solid ${theme.color.main_blue};
		background-color: ${theme.color.main_blue};
		background-image: url(${CheckIcon});
		background-repeat: no-repeat;
		background-position: center;
	}
`;
