import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const getOutlineTextStyle = (outlineColor: string) => {
	return css`
		position: relative;
		z-index: 0;
		${theme.font.head_c}
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
