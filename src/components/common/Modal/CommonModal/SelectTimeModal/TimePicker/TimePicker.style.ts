import { css } from "@emotion/react";

export const listStyle = css`
	height: 10.875rem;
	overflow-y: scroll;
	position: relative;
	scrollbar-width: none;
	-ms-overflow-style: none;

	::-webkit-scrollbar {
		display: none;
	}
`;

export const listCenterStyle = css`
	height: 3.625rem;
	position: sticky;
	background-color: transparent;
	top: 50%;
	transform: translateY(-50%);
`;

export const listItemStyle = (isSelected: boolean) => css`
	height: 3.625rem;
	opacity: ${!isSelected && 0.5};
	display: flex;
	align-items: center;
`;
