import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 22.5rem;
	margin: 0 auto;
	padding: 1.25rem 1.5rem;
	${theme.font.body_b}
`;

export const profileBoxStyle = css`
	display: flex;
	align-items: center;
	gap: 16px;
	padding: 0.46875rem;
	border-radius: 15px;
	height: 5.9375rem;
	background-color: ${theme.color.bg};
	margin-bottom: 0.375rem;

	& > img {
		width: 3.625rem;
		height: 3.625rem;
		object-fit: contain;
	}

	& > div {
		white-space: pre-wrap;
		& > span:first-of-type {
			${theme.font.head_b}
		}
	}
`;

export const tipBoxStyle = css`
	position: relative;
	display: flex;
	label {
		text-align: center;
		padding: 0.625rem;
		width: 6.875rem;
		border-radius: 20px;
		color: white;
		background-color: ${theme.color.main_deep_blue};
	}
`;

export const textBoxStyle = css`
	transform: translateY(calc(2.125rem + 12px));
	position: absolute;
	background-color: white;
	white-space: pre-wrap;
	padding: 1rem;
	width: 19.375rem;
	height: 9.25rem;
	border: 1px solid ${theme.color.main_blue};
	border-radius: 5px;

	& > div {
		width: 14.75rem;
		& > .bold {
			${theme.font.head_c}
			color: ${theme.color.main_blue}
		}
	}

	& > button {
		position: absolute;
		transform: translate(-1rem, 1rem);
		top: 0;
		right: 0;
	}
`;

export const selectBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 20px;

	& > li {
		display: flex;
		flex-direction: column;
		gap: 10px;
		& > label {
			display: flex;
			align-items: center;
			${theme.font.head_c}
			color: ${theme.color.font_gray};
			gap: 6px;
			& > span:nth-of-type(2) {
				${theme.font.body_xs}
				color:${theme.color.main_blue}
			}
		}

		& > .combined {
			display: flex;
			padding: 1.25rem 1rem;
			border-radius: 15px;
			color: ${theme.color.button_deactivated};
			background-color: ${theme.color.bg};
			& > span {
				flex: 1;
			}
		}

		& > .divided {
			display: flex;
			& > span {
				padding: 1.25rem 1rem;
				border-radius: 15px;
				color: ${theme.color.button_deactivated};
				background-color: ${theme.color.bg};
			}
			& > span:first-of-type {
				width: 40%;
				margin-right: 0.375rem;
			}
			& > span:nth-of-type(2) {
				width: 60%;
			}
		}
	}
`;
