import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const getContainerStyle = (isFixed: boolean) => css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 22.5rem;
	height: 3.5rem;
	padding: 0 1.5rem;
	margin: 0 auto;
	background-color: #fff;
	z-index: ${theme.zIndex.overlayBottom};
	position: ${isFixed ? "fixed" : "relative"};
	left: ${isFixed && "50%"};
	transform: ${isFixed && "translateX(-50%)"};
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
