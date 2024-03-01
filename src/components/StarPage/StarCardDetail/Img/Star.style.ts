import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const starImgStyle = css`
	width: 3.75rem;
	height: 3.75rem;
	position: absolute;
	bottom: 16px;
	right: 16px;

	img {
		width: 3.75rem;
		height: 3.75rem;
	}

	strong {
		position: absolute;
		top: 1.125rem;
		left: 1.125rem;
		font-size: 1.25rem;
		font-weight: 700;
		color: ${theme.color.font_black};
	}
`;
