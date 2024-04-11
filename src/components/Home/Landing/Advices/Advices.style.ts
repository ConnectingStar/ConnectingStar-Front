import { css } from "@emotion/react";

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
