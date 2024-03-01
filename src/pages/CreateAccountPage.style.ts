import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const createAccountStyle = {
	container: css`
		width: 22.5rem;
		margin: 0 auto;
		padding: 20px 24px;

		& > h1 {
			${theme.font.head_a}
			margin-bottom: 40px;
		}
	`,
	wrap: css`
		width: 100%;
		& > li {
			width: 100%;
			height: 87px;
			margin-bottom: 20px;
			& > h2 {
				${theme.font.head_c}
				color: ${theme.color.font_gray};
				margin-bottom: 12px;
			}
			& > div {
				display: flex;
				justify-content: space-between;
				width: 100%;
				height: 55px;
				background-color: ${theme.color.bg};
				color: ${theme.color.button_deactivated};
				${theme.font.body_a};
				border-radius: 15px;
				padding: 1rem;
			}
		}
	`,
};
