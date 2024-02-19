import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

// TODO: 추후 theme font & color로 변경
export const homePageStyle = {
	container: css`
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		min-width: 100%;
		background-color: ${theme.color.bg};
	`,
	innerWrapper: css`
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 1.5rem;
		gap: 1.25rem;
	`,
};
