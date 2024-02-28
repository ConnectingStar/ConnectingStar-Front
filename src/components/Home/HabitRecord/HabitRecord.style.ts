import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const habitRecordStyle = {
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
		gap: 40px;
	`,
	Title: css`
		display: flex;
		flex-direction: column;
		${theme.font.head_a}
	`,
	identityWrapper: css`
		display: flex;
		flex-direction: column;
		gap: 12px;
		.subtitle {
			${theme.font.head_c};
			color: ${theme.color.font_gray};
		}
		.identity {
			${theme.font.body_a};
			color: ${theme.color.font_black};
		}
	`,
	recordWrapper: css`
		display: flex;
		flex-direction: column;
		gap: 6px;
		.textarea {
			white-space: nowrap;
			height: 3.4375rem;
			background-color: ${theme.color.bg};
			border: none;
			border-radius: 15px;
			padding: 15px;
			${theme.font.body_a}
		}
		.textarea::placeholder {
			${theme.color.button_deactivated}
		}
		.unit {
			width: 4.875rem;
		}
		.tail {
			${theme.font.head_c};
			color: ${theme.color.font_gray};
		}
	`,
	recordHeader: css`
		display: flex;
		align-items: center;
		${theme.font.head_c};
		color: ${theme.color.font_gray};
		span {
			margin: 0 0.125rem 0.125rem 0;
		}
	`,
	unitWrapper: css`
		display: flex;
		align-items: center;
		gap: 12px;
	`,
	iconWrapper: css`
		display: flex;
		flex-direction: column;
		gap: 12px;
		${theme.font.head_c};
		color: ${theme.color.font_gray};
		.icons {
			display: flex;
			justify-content: space-between;
		}
	`,
};
