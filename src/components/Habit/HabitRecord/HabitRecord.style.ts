import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	flex-direction: column;
	width: 22.5rem;
	margin: 0 auto;
	padding: 4.75rem 1.5rem 5.438rem;
	gap: 40px;
	white-space: pre-wrap;
	${theme.font.body_a};
	color: ${theme.color.font_black};

	input {
		border: none;
		white-space: nowrap;
		height: 3.4375rem;
		background-color: ${theme.color.bg};
		border-radius: 15px;
		white-space: pre-wrap;
		padding: 0.9375rem;
		resize: none;
	}

	input::placeholder {
		${theme.color.button_deactivated}
	}

	h1 {
		${theme.font.head_a};
	}

	h2,
	h3 {
		${theme.font.head_c};
		color: ${theme.color.font_gray};
	}

	& > label {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
`;

export const conditionWrapperStyle = css`
	& > h3:first-of-type {
		display: flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 0.75rem;
	}

	& > h3:last-of-type {
		margin-top: 0.75rem;
	}

	& > ul {
		display: flex;
		flex-direction: column;
		gap: 6px;

		& > li > input {
			width: 100%;
		}

		& > li:last-of-type {
			input {
				width: 4.875rem;
				margin-right: 0.75rem;
			}
			span:after {
				content: "*";
				color: ${theme.color.main_blue};
			}
		}
	}
`;

export const iconsStyle = (isActivated: boolean, selectedIcon: number | null) => css`
	opacity: ${!isActivated && 0.5};
	pointer-events: ${!isActivated && "none"};
	& > div {
		display: flex;
		gap: 18px;

		& > span {
			transition: 0.3s ease;
		}

		& > :not(.selected) {
			opacity: ${selectedIcon && 0.5};
		}
	}

	& > h2 {
		margin-bottom: 0.75rem;

		& > p {
			display: inline;
			color: ${theme.color.main_blue};
		}
	}

	& > h2:after {
		content: "*";
		color: ${theme.color.main_blue};
	}
`;

export const inputBoxStyle = (isActivated: boolean, selectedIcon: number | null) => css`
	display: flex;
	flex-direction: column;
	gap: 12px;
	position: relative;
	opacity: ${(!isActivated || !selectedIcon) && 0.5};
	pointer-events: ${(!isActivated || !selectedIcon) && "none"};
	label {
		color: ${theme.color.font_gray};
		${theme.font.head_c};
	}

	textarea {
		all: unset;
		padding: 1rem;
		background-color: ${theme.color.bg};
		border-radius: 15px;
		height: 11.875rem;
		-ms-overflow-style: none; /* 인터넷 익스플로러 */
		scrollbar-width: none; /* 파이어폭스 */

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
