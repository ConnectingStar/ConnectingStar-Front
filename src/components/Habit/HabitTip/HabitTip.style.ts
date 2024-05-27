import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const tipBoxStyle = css`
	position: relative;
	display: flex;
	${theme.font.body_b};

	& > button {
		display: flex;
		align-items: center;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		color: white;
		background-color: ${theme.color.main_deep_blue};
	}

	& > div {
		top: 2.625rem;
		position: absolute;
		display: flex;
		flex-direction: column;
		background-color: white;
		white-space: pre-wrap;
		padding: 1rem;
		border: 1px solid ${theme.color.main_blue};
		border-radius: 5px;
		gap: 20px;
		width: 100%;

		& > div {
			max-width: 14.75rem;

			& > p:first-of-type {
				${theme.font.head_c};
				color: ${theme.color.main_blue};
			}
		}

		& > svg {
			position: absolute;
			top: 1rem;
			right: 1rem;
		}
	}
`;
