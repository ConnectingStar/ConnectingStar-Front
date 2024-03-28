import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	border-radius: 15px 15px 0 0;
	background-color: white;

	& > div:first-of-type {
		display: flex;
		align-items: center;
		${theme.font.header};
		height: 3.625rem;
		padding: 1.125rem 1.5rem 0.875rem;
	}

	& > div:nth-of-type(2) {
		display: flex;
		background-color: ${theme.color.bg};
		color: ${theme.color.font_black};
		padding: 0 3.625rem 0 3.625rem;
		${theme.font.time};

		& > div {
			display: flex;
			width: 50%;
		}

		& > div:nth-of-type(2) {
			position: relative;
			justify-content: space-between;

			& > p {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}

	& > span {
		display: flex;
		padding: 1rem 1.5rem;
	}
`;

export const listStyle = css`
	list-style-type: none;
	height: 10.875rem;
	overflow-y: scroll;
	position: relative;

	::-webkit-scrollbar {
		display: none;
	}
	scrollbar-width: none;
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
