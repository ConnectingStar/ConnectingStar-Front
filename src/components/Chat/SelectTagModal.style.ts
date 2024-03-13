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
<<<<<<< HEAD
<<<<<<< HEAD
		width: 22.5rem;
		padding: 1.25rem 1.5rem 1rem;
=======
		width: 360px;
=======
		width: 22.5rem;
>>>>>>> a88c92f ([TS-144] Design: px -> rem)
		padding: 1.25rem 1.5rem 1rem 1.5rem;
>>>>>>> 03e43c2 ([TS-144] Feat: SelectTagModal)
		& > h1 {
			${theme.font.head_a}
			margin-bottom: 2.5rem;
		}
	`,
	tags: (isInputFocus: boolean) => css`
		${theme.font.body_a};
		& > ul {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 0.375rem;
			& > li {
				display: flex;
				justify-content: center;
				flex-grow: 1;
				background-color: ${theme.color.bg};
				border-radius: 20px;
				height: 3.438rem;
				padding: 1rem;
<<<<<<< HEAD
=======
				margin: 0 6px 6px 0;
			}
			.selected {
				background-color: ${theme.color.main_blue};
				color: white;
>>>>>>> a88c92f ([TS-144] Design: px -> rem)
			}
		}

		& > input {
<<<<<<< HEAD
			${isInputFocus && "position: fixed; bottom: 4.688rem;"}
			width: 19.5rem;
			height: 3.438rem;
			margin-top: 1.25rem;
=======
			${isInputFocus && "position: fixed; bottom: 75px;"}
			width: 19.5rem;
			height: 3.438rem;
			margin-top: 14px;
			padding: 1rem;
>>>>>>> 03e43c2 ([TS-144] Feat: SelectTagModal)
			background-color: ${theme.color.bg};
			border: none;
			border-radius: 20px;
		}

		.selected {
			background-color: ${theme.color.main_blue};
			color: white;
		}
	`,
};
