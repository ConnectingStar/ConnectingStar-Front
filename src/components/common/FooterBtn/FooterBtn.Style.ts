import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const FooterBtnRound = (transparent: boolean, positionStatic: boolean) => {
	return css`
		${!positionStatic && "position: fixed;bottom: 0;left: 50%;	transform: translateX(-50%);"};
		width: 100%;
		height: 5.5rem;
		padding: 1.063rem 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		background-color: ${transparent ? "transparent" : "white"};

		& > button {
			width: 100%;
			height: 3.438rem;
			border-radius: 15px;
			${theme.font.button_big};
			color: white;
			background-color: ${theme.color.main_blue};

			&:disabled {
				opacity: 40%;
			}

			&.cancle {
				color: ${theme.color.button_deactivated};
				background-color: ${theme.color.button_disabled};
				opacity: 100%;
			}
		}
	`;
};

export const FooterBtnSquare = () => {
	return css`
		width: 100%;
		height: 3.44rem;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		left: 0;
		bottom: 0;

		& > button {
			height: 100%;
			background-color: ${theme.color.main_blue};
			color: white;
			flex-grow: 1;

			&:disabled {
				opacity: 40%;
			}

			&.cancle {
				color: ${theme.color.button_deactivated};
				background-color: ${theme.color.button_disabled};
				opacity: 100%;
			}
		}
	`;
};
