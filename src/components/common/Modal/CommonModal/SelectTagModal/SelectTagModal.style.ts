import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const container = css`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: white;
	z-index: ${theme.zIndex.overlayMiddle};
`;

export const wrap = css`
	width: 22.5rem;
	padding: 4.75rem 1.5rem 1rem;
	margin: 0 auto;

	& > h1 {
		${theme.font.head_a}
		margin-bottom: 2.5rem;
	}
`;

export const tagStyle = (isInputFocus: boolean) => css`
	${theme.font.body_a};

	& > ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.375rem;
		& > li {
			display: flex;
			justify-content: center;
			flex-grow: 1;
			background-color: ${theme.color.bg};
			border-radius: 20px;
			height: 3.438rem;
			padding: 1rem;
		}
	}

	& > input {
		${isInputFocus && "position: fixed; bottom: 4.688rem;"}
		width: 19.5rem;
		height: 3.438rem;
		border: none;
		border-radius: 20px;
		padding: 1rem;
		margin-top: 1.25rem;
		background-color: ${theme.color.bg};

		&:focus {
			outline: none;
			background-color: ${theme.color.bg};
			color: black;
		}
	}

	.selected {
		background-color: ${theme.color.main_blue};
		color: white;
	}
`;
