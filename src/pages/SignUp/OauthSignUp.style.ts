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
