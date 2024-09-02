import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const container = css`
	display: flex;

	& > img {
		flex-shrink: 0;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		margin-right: 0.375rem;
		background-color: #d9d9d9;
	}

	.bold {
		${theme.font.body_b_bold}
	}

	.blue {
		color: ${theme.color.main_blue};
	}
`;

export const chatWrap = css`
	width: 100%;
	padding-right: 1rem;
	> li {
		white-space: pre-wrap;
		display: inline-block;
		border: 2px solid ${theme.color.line};
		border-radius: 15px;
		margin-bottom: 0.375rem;
		background-color: white;
		padding: 1rem;
	}
	> button {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 2rem;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		color: white;
		background-color: ${theme.color.main_deep_blue};
	}
`;

export const userMessageStyle = css`
	float: right;
	padding: 1rem;
	border-radius: 15px;
	margin: 0.75rem 0;
	color: white;
	background-color: ${theme.color.main_blue};
	${theme.font.body_b};

	.alert {
		display: flex;
		gap: 26px;
		& > div {
			display: flex;
			flex-direction: column;
			gap: 12px;
		}
	}

	.all-user-data {
		width: 13.125rem;

		h2 {
			margin-bottom: 0.75rem;
		}

		:not(:last-child)::after {
			content: "";
			display: block;
			border-bottom: 1px solid #ffffff;
			margin: 0.9375rem 0;
			opacity: 0.3;
		}

		.contents {
			display: flex;
			gap: 26px;
			span:first-of-type {
				width: 3.6875rem;
				flex-shrink: 0;
			}

			:not(:last-of-type) {
				margin-bottom: 0.375rem;
			}
		}
	}
`;
