import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const chattingPageStyle = {
	container: css`
		max-width: 22.5rem;
		margin: 0 auto;
		min-height: 100vh;
		height: 100%;
		background-color: ${theme.color.bg};
	`,
	header: css`
		position: fixed;
		top: 0;
	`,
	chattingWrap: css`
		padding: 5.75rem 1.5rem 1rem 1.5rem;
		margin: 0 auto;
		${theme.font.body_b};
		height: 100%;
	`,
};
