import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const headerStyle = {
	container: css`
		display: flex;
		align-items: center;
		justify-content: center;
		width: 22.5rem;
		height: 3.5rem;
		padding: 0 1.5rem;
		margin: 0 auto;
		position: relative;
		background-color: #fff;
	`,
	title: css`
		${theme.font.header}
	`,
	iconButton: css`
		position: absolute;
		left: 1.5rem;
	`,
	textButton: css`
		position: absolute;
		right: 1.5rem;
		${theme.font.button_big}
		color: ${theme.color.font_deep_gray};
		background-color: transparent;
	`,
	titleLarge: css`
		${theme.font.head_a}
		margin-right: auto;
	`,
};
