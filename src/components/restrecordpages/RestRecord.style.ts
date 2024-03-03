import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const restRecordStyle = {
	container: css`
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		min-width: 100%;
		background-color: white;
	`,
	innerWrapper: css`
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 1.5rem;
		gap: 2.5rem;
	`,
	lineWrapper: css`
		display: flex;
		flex-direction: column;
		${theme.font.body_a}
		gap: 1rem;
	`,
	innerTitle: css`
		${theme.font.head_a}
	`,
	nickname: css`
		${theme.font.body_a}
	`,
	writerWrapper: css`
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 1rem;
	`,
	writerTitle: css`
		color: ${theme.color.font_gray};
		${theme.font.head_c}
	`,
	writerTextarea: css`
		background-color: ${theme.color.bg};
		height: 11.875rem;
		border-radius: 15px;
		padding: 15px;
		border: none;
	`,
};
