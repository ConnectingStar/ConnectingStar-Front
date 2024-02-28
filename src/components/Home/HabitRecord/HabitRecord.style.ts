import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	flex-direction: column;
	max-width: 360px;
	padding: 1.5rem;
	gap: 40px;
	${theme.font.body_a};
	color: ${theme.color.font_black};
	& h1 {
		${theme.font.head_c};
		color: ${theme.color.font_gray};
	}
`;

export const titleStyle = css`
	display: flex;
	flex-direction: column;
	${theme.font.head_a}
`;

export const identityStyle = css`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const recordStyle = css`
	display: flex;
	flex-direction: column;
	gap: 6px;
	.header {
		display: flex;
		align-items: center;
		span {
			margin: 0 0.125rem 0.125rem 0;
		}
	}
	.unit {
		display: flex;
		align-items: center;
		gap: 12px;
		textarea {
			width: 4.875rem;
		}
	}
	& textarea {
		white-space: nowrap;
		height: 3.4375rem;
		background-color: ${theme.color.bg};
		border: none;
		border-radius: 15px;
		padding: 15px;
		resize: none;
	}
	& textarea::placeholder {
		${theme.color.button_deactivated}
	}
`;

export const iconsStyle = css`
	display: flex;
	flex-direction: column;
	gap: 12px;
	& > div {
		display: flex;
		justify-content: space-between;
	}
`;
