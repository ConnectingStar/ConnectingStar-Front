import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const helpAnnouncementStyle = {
	container: css`
		display: flex;
		align-items: center;
		width: 100%;
		height: 3.5rem; // 56px
		background-color: ${theme.color.line};
		border-radius: 15px;
		padding: 0 0.875rem 0 0.875rem; // 0 14px 0 14px
	`,
	iconWrapper: css`
		display: flex;
		justify-content: center;
		align-items: center;
		width: auto;
		height: 2rem;
		aspect-ratio: 1/1;
	`,
	lineWrapper: css`
		${theme.font.head_b}
		margin: 0 0.875rem 0 0.875rem; // 0 14px 0 14px
	`,
};
