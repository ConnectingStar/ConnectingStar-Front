import { css } from "@emotion/react";

export const listStyle = css`
	height: 10.875rem;
	padding: 4.125rem 0;
	display: flex;
	flex-direction: column;
	gap: 12px;
	overflow: scroll;
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
	scroll-snap-stop: always;
	scrollbar-width: none;
	-ms-overflow-style: none;

	::-webkit-scrollbar {
		display: none;
	}
`;

export const inputStyle = css`
	width: 31.94px;
	height: 3.625rem;
	background-color: transparent;
	border: none;
	outline: none;
`;
