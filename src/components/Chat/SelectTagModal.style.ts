import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const selectTagModalStyle = {
	container: css`
		position: fixed;
		top: 55px;
		height: 100vh;
		background-color: white;
		padding: 20px 1.5rem 1rem 1.5rem;
		width: 360px;

		& > h1 {
			${theme.font.head_a}
			margin-bottom: 40px;
		}
	`,
	tags: css`
		${theme.font.body_a};
		& > ul {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			& > li {
				max-width: 8.125rem;
				display: flex;
				justify-content: center;
				flex-grow: 1;
				white-space: nowrap;
				background-color: ${theme.color.bg};
				border-radius: 20px;
				height: 55px;
				padding: 1rem;
				margin: 0 6px 6px 0; // margin 대신 넣을게 없나
			}
			.selected {
				background-color: ${theme.color.main_blue};
				color: white;
			}
		}

		& > input {
			width: 100%;
			height: 55px;
			margin-top: 14px;
			padding: 1rem;
			background-color: ${theme.color.bg};
			border: none;
			border-radius: 20px;
		}
	`,
};
