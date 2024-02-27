import { css } from "@emotion/react";

export const advicesStyle = {
	container: css`
		position: relative;
		overflow: scroll;
		width: 100%;
		height: 7.5rem;
		background-color: white;
		border-radius: 15px;
		&::-webkit-scrollbar {
			display: none;
		}
		-ms-overflow-style: none; /* 인터넷 익스플로러 */
		scrollbar-width: none; /* 파이어폭스 */
	`,
	advicesCarousel: css`
		display: flex;
		background-color: white;
		min-width: 100%;
		height: 100%;
		li {
			flex: 0 0 100%;
			display: flex;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	`,
};
