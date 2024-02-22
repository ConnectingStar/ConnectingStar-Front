import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const chatStyle = css`
	padding: 2rem 1.5rem 1rem 1.5rem;
	margin: 0 auto;
	background-color: ${theme.color.bg};
	height: 100vh;
	${theme.font.body_b};
`;

export const container = css`
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
		position: relative;
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
	@keyframes slideInFromBottom {
		0% {
			transform: translateY(100%);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.message-item {
		animation: slideInFromBottom 0.5s ease-out; /* 애니메이션 적용 */
	}
`;
export const replyStyle = css`
	position: absolute;
	height: 3.125rem;
	background-color: ${theme.color.main_blue};
	right: -1rem;
	display: flex;
	margin-left: auto;
	padding: 1rem;
	border-radius: 15px;
	color: white;
	margin: 12px 0;
`;
