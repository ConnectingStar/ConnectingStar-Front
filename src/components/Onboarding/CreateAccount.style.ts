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
		& > li {
			margin-bottom: 1.25rem;
			& > h2 {
				${theme.font.head_c}
				color: ${theme.color.font_gray};
				margin-bottom: 0.75rem;
			}
			& > div {
				display: flex;
				justify-content: space-between;
				height: 3.438rem;
				background-color: ${theme.color.bg};
				color: ${theme.color.button_deactivated};
				align-items: center;
				${theme.font.body_a};
				border-radius: 15px;
				padding: 1rem;
			}
		}
	`,
};
