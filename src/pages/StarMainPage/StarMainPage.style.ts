import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const containerStyle = css`
	height: 100dvh;
	background: linear-gradient(
		#0b0a0b 2%,
		#192771 38%,
		#3e53b3 63%,
		#4166b7 76%,
		#6b8acb 84%,
		#6d68d4 98%
	);

	.wrapper-top {
		width: 22.5rem;
		padding: 1.75rem 1.5rem 0;
		margin: 0 auto;
	}

	.wrapper-middle {
		display: flex;
		justify-content: center;
		align-items: center;
		height: calc(100dvh - 20.825rem);

		svg {
			height: 100%;
		}
	}

	.wrapper-bottom {
		width: 22.5rem;
		padding: 0 1.5rem 4.75rem;
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}
`;

export const starMainPageGnbStyle = css`
	opacity: 0.5;

	& > div {
		background-color: ${theme.color.font_black};
	}
`;
