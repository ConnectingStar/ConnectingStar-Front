import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	flex-direction: column;
	gap: 40px;
	width: 22.5rem;
	margin: 0 auto;
	padding: 4.75rem 1.25rem 0;

	& > :not(div:first-of-type) {
		display: flex;
		flex-direction: column;
		gap: 6px;

		& > span:first-of-type {
			${theme.font.head_c}
			color: ${theme.color.font_gray}
		}
	}

	& > div:nth-of-type(3) {
		gap: 12px;
	}
`;

export const conditionStyle = css`
	display: flex;
	justify-content: space-between;
	border-radius: 15px;
	padding: 1rem;
	background-color: ${theme.color.bg};

	& > p:first-of-type {
		${theme.font.body_a_bold}
	}

	& > p:last-of-type {
		${theme.font.body_a};
		color: ${theme.color.main_blue};
	}
`;

export const quitButtonStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	width: 100%;
	left: 0;
	bottom: 0;
	border-top: 0.5rem solid ${theme.color.line};
	color: ${theme.color.error};
	height: 3.9375rem;
`;
