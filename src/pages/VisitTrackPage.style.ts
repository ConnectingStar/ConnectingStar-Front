import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const visitTrackStyle = css`
	width: 22.5rem;
	margin: 0 auto;
	padding: 1.25rem 1.5rem;
	& > h1 {
		${theme.font.head_a}
		margin-bottom: 2.5rem;
	}
	li {
		height: 3.438rem;
		border: 2px solid ${theme.color.line};
		border-radius: 15px;
		margin-bottom: 0.375rem;
		display: flex;
		justify-content: center;
		align-items: center;
		${theme.font.button_big}
	}
`;
