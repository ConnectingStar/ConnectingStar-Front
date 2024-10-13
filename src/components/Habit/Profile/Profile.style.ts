import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 19.5rem;
	height: calc(3.5rem + env(safe-area-inset-top));
	padding-top: env(safe-area-inset-top);
	position: fixed;
	background-color: ${theme.color.white};
	z-index: ${theme.zIndex.overlayBottom};
`;

export const profileBoxStyle = css`
	display: flex;
	gap: 12px;

	& > img {
		width: 2.5rem;
		height: 2.5rem;
		object-fit: contain;
		border-radius: 5px;
	}
`;

export const identityTextStyle = css`
	${theme.font.body_c_bold};
	color: ${theme.color.main_blue};
`;

export const nicknameTextStyle = css`
	${theme.font.head_c}
`;
