import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const chattingStyle = {
	container: css`
		display: flex;
	`,
	profile: css`
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		background-color: #d9d9d9;
		margin-right: 0.375rem;
	`,
	chatWrap: css`
		& > ul {
			width: 100%;
			padding-right: 1rem;
			> li {
				white-space: pre-wrap;
				display: inline-block;
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
};

export const replyStyle = css`
	float: right;
	height: 3.125rem;
	margin: 12px 0;
	padding: 1rem;
	border-radius: 15px;
	background-color: ${theme.color.main_blue};
	color: white;
`;
