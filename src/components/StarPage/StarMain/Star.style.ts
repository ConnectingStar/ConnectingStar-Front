import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

type FontType = keyof typeof theme.font;

export const getOutlineTextStyle = (outlineColor: string, font: FontType) => {
	return css`
		position: relative;
		z-index: 0;
		${theme.font[font]}
		color: #fff;

		&:after {
			content: attr(data-text);
			display: block;
			position: absolute;
			top: 0;
			z-index: -1;
			-webkit-text-stroke: 0.25rem ${outlineColor}; // 2px로 하면 디자인 시안과 조금 달라짐
		}
	`;
};
