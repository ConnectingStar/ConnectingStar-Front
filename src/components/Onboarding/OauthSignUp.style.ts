import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const oauthSignUpStyle = {
	container: css`
		width: 22.5rem;
		margin: 0 auto;
		padding: 0 1.5rem;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	`,
	logo: css`
		display: flex;
		flex-direction: column;
		align-items: center;
		& > img {
			width: 6.25rem;
			height: 6.25rem;
			background-color: grey;
		}
		& > p {
			${theme.font.head_a}
		}
		margin: 8.75rem 0 10.625rem;
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
		width: 100%;
		margin: 0 auto;
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
