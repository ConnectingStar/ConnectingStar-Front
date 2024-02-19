import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const headerStyle = {
	container: css`
		display: flex;
		align-items: center;
		justify-content: center;
		width: 360px; // TODO: 세림님과 상의 필요
		height: 3.5rem;
		padding: 0 24px;
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
<<<<<<< HEAD
=======
		font-size: 1.5rem;
		font-weight: 500;
>>>>>>> 7a117e7 ([TS-241] Refactor: mypage landing header component add)
	`,
};
