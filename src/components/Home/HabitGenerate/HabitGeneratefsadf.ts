import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 22.5rem;
	margin: 0 auto;
	padding: 4.75rem 1.5rem 1.25rem;
`;

export const profileBoxStyle = css`
	display: flex;
	align-items: center;
	gap: 16px;
	padding: 1rem 0.75rem;
	border-radius: 15px;
	height: 5.9375rem;
	background-color: ${theme.color.bg};
	margin-bottom: 0.375rem;
	${theme.font.body_b};

	& > img {
		width: 3.625rem;
		height: 3.625rem;
		object-fit: contain;
	}

	& > div {
		white-space: pre-wrap;

		& > p:first-of-type {
			${theme.font.head_b}
		}
	}
`;

export const selectBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 20px;

	& > li {
		display: flex;
		flex-direction: column;
		gap: 12px;
		${theme.font.body_a};

		& > div:first-of-type {
			display: flex;
			align-items: center;
			color: ${theme.color.font_gray};
			gap: 6px;

			& > span:first-of-type {
				${theme.font.head_c};
			}

			& > span:nth-of-type(2) {
				${theme.font.body_xs};
				color: ${theme.color.main_blue};
			}
		}

		& > .sticked {
			display: flex;
			align-items: center;
			height: 3.4375rem;
			padding: 1rem;
			border-radius: 15px;
			color: ${theme.color.button_deactivated};
			background-color: ${theme.color.bg};
			& > span {
				flex: 1;
			}
		}

		& > .split {
			display: flex;

			& > span {
				align-items: center;
				height: 3.4375rem;
				padding: 1rem;
				border-radius: 15px;
				color: ${theme.color.button_deactivated};
				background-color: ${theme.color.bg};
			}

			& > span:first-of-type {
				width: 6.25rem;
				margin-right: 0.375rem;
			}

			& > span:nth-of-type(2) {
				width: 13.625rem;
			}
		}
	}
`;
