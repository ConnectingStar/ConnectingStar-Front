import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

const commonButton = css`
	display: flex;
	position: fixed;
	bottom: 5.188rem;
	left: 50%;
	width: 22.5rem;
	height: 2.25rem;
	padding: 0 1.5rem;
	gap: 0.375rem;
	& > button {
		border: 2px solid ${theme.color.main_blue};
		color: ${theme.color.main_blue};
		${theme.font.body_b};
		border-radius: 20px;
		padding: 0.438rem 1.563rem;
		background-color: white;
	}
`;

export const chattingStyle = {
	container: css`
		display: flex;
	`,
	profile: css`
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		margin-right: 0.375rem;
		background-color: #d9d9d9;
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
	sideButton: css`
		${commonButton};
		transform: translateX(-50%);
		& > button {
			width: 9.563rem;
		}
	`,
	scrollButton: css`
		${commonButton};
		transform: translateX(-11.25rem);
		overflow-x: auto;
		&::-webkit-scrollbar {
			display: none;
		}
		& > button {
			white-space: nowrap;
			flex: 0 0 auto;
		}
	`,
};

export const replyStyle = css`
	${theme.font.body_b}
	float: right;
	margin: 0.75rem 0;
	padding: 1rem;
	border-radius: 15px;
	background-color: ${theme.color.main_blue};
	color: white;
	.alert {
		display: flex;
		gap: 1.625rem;
		& > div {
			display: flex;
			flex-direction: column;
			gap: 0.75rem;
		}
		.bold {
			${theme.font.body_b_bold}
		}
	}
	.allUserData {
		width: 13.125rem;
		display: flex;
		flex-direction: column;
		& > div {
			display: flex;
			margin: 0.75rem 0 0.375rem 0;
			ul {
				width: 5.313rem;
			}
		}
		.bold {
			${theme.font.body_b_bold}
		}
		::after {
			width: 100%;
			height: 1px;
			content: "";
			background-color: white;
			margin: 0.75rem 0;
		}
		&:last-of-type {
			::after {
				display: none;
			}
		}
	}
`;
