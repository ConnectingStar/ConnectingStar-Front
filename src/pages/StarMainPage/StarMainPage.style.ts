import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const containerStyle = css`
	height: 100dvh;
	position: relative;
	background: linear-gradient(
		#0b0a0b 2%,
		#192771 38%,
		#3e53b3 63%,
		#4166b7 76%,
		#6b8acb 84%,
		#6d68d4 98%
	);

	.wrapper {
		width: 22.5rem;
		padding: 0 1.5rem 4.75rem;
		padding: 0 1.5rem calc(4.75rem + env(safe-area-inset-bottom));
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	@media (display-mode: standalone) {
		height: 100vh;
	}
`;

export const starMainPageGnbStyle = css`
	opacity: 0.5;

	& > div {
		background-color: ${theme.color.font_black};
	}
`;
