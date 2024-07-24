import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	flex-direction: column;
	width: 22.5rem;
	margin: 0 auto;
	padding: 4.75rem 1.5rem 6.5rem;
	gap: 40px;
	white-space: pre-wrap;
	${theme.font.body_a};
	color: ${theme.color.font_black};

	& > h1 {
		${theme.font.head_a};
	}

	h3 {
		${theme.font.head_c};
		color: ${theme.color.font_gray};
	}
`;

export const identityBoxStyle = css`
	& > h3 {
		margin-bottom: 12px;
	}

	& > span {
		color: ${theme.color.font_black};
		${theme.font.body_a};
	}
`;

export const contentTitleBoxStyle = css`
	display: flex;
	gap: 6px;
	align-items: center;

	& > span {
		${theme.font.body_xs};
		color: ${theme.color.main_blue};
	}
`;

export const contentBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 12px;

	& > ul {
		display: flex;
		flex-direction: column;
		gap: 6px;

		& > li:last-of-type {
			input {
				width: 4.875rem;
				margin-right: 0.75rem;
			}

			span:after {
				margin-left: 2px;
				content: "*";
				color: ${theme.color.main_blue};
			}
		}
	}
`;

export const contentInputStyle = (isChanged?: boolean) => css`
	border: none;
	white-space: nowrap;
	height: 3.4375rem;
	background-color: ${theme.color.bg};
	border-radius: 15px;
	white-space: pre-wrap;
	padding: 0.9375rem;
	resize: none;
	width: 100%;
	outline: none;
	color: ${isChanged === false && theme.color.button_deactivated};

	&::placeholder {
		color: ${theme.color.button_deactivated};
	}
`;

export const iconStyle = css`
	& > div {
		display: flex;
		gap: 18px;

		& > :not(.selected) {
			opacity: 0.5;
		}
	}

	& > h3 {
		margin-bottom: 0.75rem;

		&:after {
			margin-left: 2px;
			content: "*";
			color: ${theme.color.main_blue};
		}
	}
`;

export const inputBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 12px;

	textarea {
		all: unset;
		padding: 1rem;
		background-color: ${theme.color.bg};
		border-radius: 15px;
		height: 11.875rem;
		-ms-overflow-style: none;
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}

		&::placeholder {
			color: ${theme.color.button_deactivated};
		}
	}

	& > span {
		${theme.font.body_c_bold};
		color: ${theme.color.font_gray};
		align-self: flex-end;
	}
`;
