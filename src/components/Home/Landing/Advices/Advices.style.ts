import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const advicesWrapperStyle = css`
	position: relative;
	display: flex;

	& > ul:last-of-type {
		position: absolute;
		display: flex;
		gap: 2px;
		transform: translate(-50%, -50%);
		bottom: 0.5625rem;
		left: 50%;
		width: 8.6875rem;
		height: 0.0625rem;
	}
`;

export const containerStyle = css`
	position: relative;
	overflow: scroll;
	border-radius: 15px;
	-ms-overflow-style: none; /* 인터넷 익스플로러 */
	scrollbar-width: none; /* 파이어폭스 */

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const advicesStyle = css`
	display: flex;

	li {
		flex: 0 0 100%;

		img {
			object-fit: cover;
		}
	}
`;

export const listStyle = (isCurrentIndex: boolean) => css`
	flex: 1;
	transform: translateY(${isCurrentIndex ? "-2px" : "0px"});
	background-color: ${isCurrentIndex ? theme.color.main_deep_blue : "white"};
`;
