import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const profileStyle = {
	container: css`
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 3.5rem;
	`,
	imageWrapper: css`
		display: flex;
		overflow: hidden;
		height: 100%;
		width: auto;
		aspect-ratio: 1/1;
		border-radius: 4px;
		background-color: ${theme.color.button_deactivated};
	`,
	names: css`
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		border-radius: 4px;
		margin: 0 1.25rem 0 1.25rem; // 0 20px 0 20px
	`,
	buttonWrapper: css`
		display: flex;
		justify-content: center;
		align-items: center;
		width: auto;
		height: 100%;
		aspect-ratio: 1/1;
		border-radius: 4px;
	`,
};
