import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const progressbarStyle = (calculateProgress: number) => css`
	width: 100%;
	height: 4px;
	background-color: ${theme.color.button_disabled};
	& > div {
		height: 4px;
		width: ${calculateProgress}%;
		background-color: ${theme.color.main_blue};
	}
`;
