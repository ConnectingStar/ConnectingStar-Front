import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const titleStyle = {
	h1: css`
		margin-bottom: 0.5625rem;
		${theme.font.head_a}
		color: ${theme.color.font_black};
	`,
	h2: css`
		${theme.font.head_b}
		color: ${theme.color.main_Blue};
	`,
};
