import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const OauthSignUpStyle = {
	container: css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		height: 100vh;
	`,
	logo: css`
		display: flex;
		flex-direction: column;
		align-items: center;
		& > img {
			width: 6.25rem;
			height: 6.25rem;
		}
		& > p {
			${theme.font.head_a}
		}
	`,
	oauth: css`
		max-width: 500px;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 6px;
		& > button {
			height: 3.438rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 15rem;
			gap: 5px;
		}
		& :nth-child(1) {
			background-color: #fae100;
		}
		& :nth-child(2) {
			border: 2px solid ${theme.color.line};
			& > img {
				background-color: white; // 안 넣으면 구글 배경 노란색
			}
		}
	`,
	footer: css`
		position: fixed;
		bottom: 1.25rem;
		color: ${theme.color.button_deactivated};
		text-align: center;
		${theme.font.body_xs}
	`,
};
