import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const container = css`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100dvh;
	background-color: white;
	z-index: ${theme.zIndex.overlayMiddle};
	transform: translate(0, 0);
	overflow-y: auto;
	overscroll-behavior-y: none;
`;

export const scroll = css`
	width: 1px;
	height: calc(100% + 1px);
	position: absolute;
	top: 0;
	left: 0;
`;

export const contents = css`
	width: 22.5rem;
	height: 100%;
	padding: calc(4.75rem + env(safe-area-inset-top)) 1.5rem 0;
	margin: 0 auto;
	overflow-y: auto;

	& > h1 {
		margin-bottom: 2.5rem;
		${theme.font.head_a}
	}
`;

export const locationListStyle = css`
	display: flex;
	flex-direction: column;
	margin-bottom: 2.5rem;
	gap: 0.375rem;
	& > p {
		margin-bottom: 0.375rem;
		${theme.font.head_c};
		color: ${theme.color.font_gray};
	}
	& > li {
		display: flex;
		gap: 0.75rem;
		${theme.font.body_a};
	}
`;

export const locationInputStyle = css`
	display: flex;
	align-items: center;
	width: 19.5rem;
	height: 3.438rem;
	border: none;
	border-radius: 15px;
	padding: 15px;
	${theme.font.body_a};
	background-color: ${theme.color.bg};
	color: black;

	&::placeholder {
		color: ${theme.color.button_deactivated};
	}

	&:focus {
		position: relative;
		outline: none;
		background-color: ${theme.color.bg};
		color: black;
		margin-bottom: 4.6875rem;
	}

	::-webkit-search-decoration,
	::-webkit-search-cancel-button,
	::-webkit-search-results-button,
	::-webkit-search-results-decoration {
		display: none;
	}
`;
