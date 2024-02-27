import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const profileStyle = {
	container: css`
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.625rem 0 0.625rem 0;
	`,
	imageWrapper: css`
		overflow: hidden;
		height: 2.5rem;
		width: auto;
		aspect-ratio: 1/1;
		border-radius: 4px;
		background-color: ${theme.color.button_deactivated};
		& > img {
			object-fit: cover;
		}
	`,
	names: css`
		flex: 1;
		display: flex;
		flex-direction: column;
		margin: 0 1.25rem 0 1.25rem;
		.identity {
			${theme.font.body_c};
			color: ${theme.color.main_blue};
		}
		.nickname {
			${theme.font.head_c}
		}
	`,
	buttonWrapper: css`
		width: auto;
		height: 1.75rem;
		aspect-ratio: 1/1;
		border-radius: 4px;
	`,
};
