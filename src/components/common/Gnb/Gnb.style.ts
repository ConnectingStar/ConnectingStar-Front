import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	padding: 0.875rem 2.6875rem;
	background-color: #fff;
	z-index: ${theme.zIndex.overlayBottom};

	& > ul {
		display: flex;
		align-items: center;
		justify-content: space-between;

		& > li {
			cursor: pointer;
		}
	}

	@media (display-mode: standalone) {
		padding-bottom: env(safe-area-inset-bottom);
	}
`;
