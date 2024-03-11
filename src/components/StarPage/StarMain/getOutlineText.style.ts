import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

type FontType = keyof typeof theme.font;

export const getOutlineTextStyle = (outlineColor: string, font: FontType) => {
	return css`
		position: relative;
		z-index: 0;
		${theme.font[font]}
		white-space: pre-wrap;
		text-align: center;
		color: #fff;

		&:after {
			content: attr(data-text);
			display: block;
			width: 100%;
			position: absolute;
			top: 0;
			z-index: -1;
			-webkit-text-stroke: 3px ${outlineColor};
		}
	`;
};
