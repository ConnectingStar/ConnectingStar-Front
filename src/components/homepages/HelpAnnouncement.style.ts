import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const HelpAnnouncementStyle = {
	container: css`
		display: flex;
		align-items: center;
		width: 100%;
		height: 3.5rem; // 56px
		background-color: ${theme.color.line};
		border-radius: 28px;
		padding: 0 0.875rem 0 0.875rem; // 0 14px 0 14px
		margin-bottom: 1.25rem; // 20px
	`,
	iconWrapper: css`
		display: flex;
		justify-content: center;
		align-items: center;
		width: auto;
		height: 100%;
		aspect-ratio: 1/1;
	`,
	lineWrapper: css`
		${theme.font.head_b}
		margin: 0 0.875rem 0 0.875rem; // 0 14px 0 14px
	`,
};
