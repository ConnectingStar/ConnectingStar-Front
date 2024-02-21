import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const storyStyle = css`
	display: flex;
	flex-direction: column;
`;

export const titleStyle = css`
	margin-bottom: 0.75rem;
	color: ${theme.color.font_gray};
	${theme.font.head_c}
`;

export const descriptionStyle = css`
	height: 11.9375rem;
	padding: 1rem;
	border-radius: 15px;
	color: ${theme.color.font_black};
	background-color: ${theme.color.bg};
`;
