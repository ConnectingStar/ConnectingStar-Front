import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const oauthSignUpStyle = {
	container: css`
		width: 22.5rem;
		margin: 0 auto;
		padding: 1.25rem 1.5rem 0;
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
		width: 19.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
		& > button {
			height: 3.438rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 15rem;
			gap: 0.313rem;

			&:first-of-type {
				background-color: ${theme.color.main_yellow};
			}
			&:last-of-type {
				border: 2px solid ${theme.color.line};
			}
		}
	`,
	footer: css`
		position: fixed;
		bottom: 1.25rem;
		color: ${theme.color.button_deactivated};
		${theme.font.body_xs};
		display: flex;
		flex-direction: column;
		align-items: center;
		& > div {
			display: flex;
		}
		.line::after {
			content: "ㅣ";
			float: right;
		}
	`,
};
