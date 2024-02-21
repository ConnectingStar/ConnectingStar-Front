import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const chatStyle = {
	chat: css`
		position: relative;
		padding: 2rem 1.5rem 1rem 1.5rem;
		margin: 0 auto;
		background-color: ${theme.color.bg};
		height: 100vh;
		${theme.font.body_b};
	`,
	dev: css`
		display: flex;
		padding-right: 1rem;
		& > div {
			width: 2.5rem;
			height: 2.5rem;
			border-radius: 50%;
			background-color: #d9d9d9;
			margin-right: 0.375rem;
		}
		& > ul {
			width: 100%;
			> li {
				border: 2px solid ${theme.color.line};
				border-radius: 15px;
				margin-bottom: 0.375rem;
				background-color: white;
				padding: 1rem;
			}
			> button {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 2rem;
				padding: 0.5rem 1rem;
				border-radius: 20px;
				color: white;
				background-color: ${theme.color.main_deep_blue};
			}
		}
	`,
	user: css`
		height: 3.125rem;
		background-color: ${theme.color.main_blue};
		position: absolute;
		right: 1.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		border-radius: 15px;
		color: white;
		margin: 12px 0;
	`,
};
