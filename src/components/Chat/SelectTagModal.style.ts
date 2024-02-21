import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const selectTagModalStyle = {
	container: css`
		position: fixed;
		top: 0;
		height: 100vh;
		background-color: white;
	`,
	wrap: css`
		width: 22.5rem;
		padding: 1.25rem 1.5rem 1rem 1.5rem;
		& > h1 {
			${theme.font.head_a}
			margin-bottom: 2.5rem;
		}
	`,
	tags: (isInputFocus: boolean) => css`
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
				height: 3.438rem;
				padding: 1rem;
				margin: 0 6px 6px 0;
			}
			.selected {
				background-color: ${theme.color.main_blue};
				color: white;
			}
		}

		& > input {
			${isInputFocus && "position: fixed; bottom: 75px;"}
			width: 19.5rem;
			height: 3.438rem;
			margin-top: 14px;
			padding: 1rem;
			background-color: ${theme.color.bg};
			border: none;
			border-radius: 20px;
		}
	`,
};
