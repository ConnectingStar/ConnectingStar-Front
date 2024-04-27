import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	width: 22.5rem;
	padding: 4.75rem 1.5rem 2.5rem;
	margin: 0 auto;
`;

export const listStyle = css`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 6px;

	h1 {
		${theme.font.body_a_bold};
		color: ${theme.color.main_blue};
	}

	h2 {
		${theme.font.body_a}
	}

	p {
		${theme.font.body_b};
	}

	p .bold {
		${theme.font.body_b_bold};
		color: ${theme.color.main_blue};
	}
`;

export const itemStyle = (isActivated: boolean) => css`
	& > div:first-of-type {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 0.9375rem;
		height: 3.4375rem;
		border-radius: 15px;
		background-color: ${theme.color.bg};

		& > div {
			display: flex;

			& > h1 {
				margin-right: 0.5rem;
			}

			& > h2 {
				${isActivated && theme.font.body_a_bold}
			}
		}

		& > svg {
			transition: 0.3s ease;
			width: 1.25rem;
			height: 1.25rem;
			transform: ${isActivated ? "rotate(90deg)" : "rotate(270deg)"};
		}
	}

	& > div:nth-of-type(2) {
		transition: 0.3s ease;
		border-radius: 0 0 15px 15px;
		margin-top: ${isActivated ? "-1.75rem" : "0"};
		display: flex;
		background-color: ${theme.color.bg};
		height: ${isActivated ? "auto" : "0"};
		overflow: hidden;
		padding: ${isActivated ? "1.75rem 1rem 0.875rem" : "0 1rem"};
	}
`;