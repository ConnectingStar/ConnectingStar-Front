import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const discoveryRouteStyle = {
	container: css`
		width: 22.5rem;
		margin: 0 auto;
		padding: 20px 24px;
		& > h1 {
			${theme.font.head_a}
			margin-bottom: 40px;
		}
		ul {
			width: 100%;
		}
		li {
			width: 100%;
			height: 55px;
			border: 2px solid ${theme.color.line};
			border-radius: 15px;
			margin-bottom: 6px;
			display: flex;
			justify-content: center;
			align-items: center;
			${theme.font.button_big}
		}
	`,
};
