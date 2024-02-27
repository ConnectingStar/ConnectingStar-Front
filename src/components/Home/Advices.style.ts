import { css } from "@emotion/react";

export const advicesStyle = {
	container: css`
		position: relative;
		overflow: scroll;
		border-radius: 15px;
		&::-webkit-scrollbar {
			display: none;
		}
		-ms-overflow-style: none; /* 인터넷 익스플로러 */
		scrollbar-width: none; /* 파이어폭스 */
	`,
	advicesCarousel: css`
		display: flex;
		li {
			flex: 0 0 100%;
			img {
				object-fit: cover;
			}
		}
	`,
};
