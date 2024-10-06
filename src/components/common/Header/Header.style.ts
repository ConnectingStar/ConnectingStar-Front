import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const getContainerStyle = (isFixed: boolean) => css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: calc(3.5rem + env(safe-area-inset-top));
	padding-top: env(safe-area-inset-top);
	max-width: 500px; // TODO: globalStyle max-width와 동일(추후 600으로 변경 필요)
	background-color: #fff;
	z-index: ${theme.zIndex.overlayBottom};
	position: ${isFixed && "fixed"};
	left: ${isFixed && "50%"};
	transform: ${isFixed && "translateX(-50%)"};
`;

export const innerContainerStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	max-width: 22.5rem;
	padding: 0 1.5rem;
	position: relative;
`;

export const getTitleStyle = (hasButton: boolean) => css`
	${hasButton ? theme.font.header : theme.font.head_a}
	margin-right: ${hasButton ? "0" : "auto"};
`;

export const iconButtonStyle = css`
	position: absolute;
	left: 1.5rem;
`;

export const textButtonStyle = css`
	position: absolute;
	right: 1.5rem;
	${theme.font.button_big}
	color: ${theme.color.font_deep_gray};
	background-color: transparent;
`;
