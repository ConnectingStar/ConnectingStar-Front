import { css } from "@emotion/react";

export const listStyle = css`
	height: 174px;
	padding: 66px 0;
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

export const listItemStyle = (isSelected: boolean) => css`
	height: 3.625rem;
	opacity: ${!isSelected && 0.5};
	display: flex;
	align-items: center;
	scroll-snap-align: center;
	scroll-snap-stop: always;
`;
