import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const createAccountStyle = {
	container: css`
		width: 22.5rem;
		margin: 0 auto;
		padding: 1.25rem 1.5rem;

		& > h1 {
			${theme.font.head_a}
			margin-bottom: 2.5rem;
		}
	`,
	wrap: css`
		width: 100%;
		& > li {
			width: 100%;
			height: 5.438rem;
			margin-bottom: 1.25rem;
			& > h2 {
				${theme.font.head_c}
				color: ${theme.color.font_gray};
				margin-bottom: 0.75rem;
			}
			& > div {
				display: flex;
				justify-content: space-between;
				width: 100%;
				height: 3.438rem;
				background-color: ${theme.color.bg};
				color: ${theme.color.button_deactivated};
				${theme.font.body_a};
				border-radius: 15px;
				padding: 1rem;
			}
		}
	`,
};
