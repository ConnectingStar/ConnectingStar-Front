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

export const wrapper = (visualViewportHeight: number) => css`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: ${visualViewportHeight ? `${visualViewportHeight}px` : "100%"};
	overscroll-behavior: contain; // 스크롤 체이닝 방지
	overflow-y: auto;
`;

export const contents = css`
	width: 22.5rem;
	padding: calc(4.75rem + env(safe-area-inset-top)) 1.5rem 0;
	margin: 0 auto;
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
		outline: none;
		background-color: ${theme.color.bg};
		color: black;
		margin-bottom: 75px;
	}

	::-webkit-search-decoration,
	::-webkit-search-cancel-button,
	::-webkit-search-results-button,
	::-webkit-search-results-decoration {
		display: none;
	}
`;
