import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const FooterBtnRound = (blur: boolean, transparent: boolean) => {
	return css`
		position: fixed;
		bottom: 0;
		width: 22.5rem;
		height: 5.5rem;
		padding: 1.063rem 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		left: 50%;
		transform: translateX(-50%);
		background-color: ${transparent ? "transparent" : "white"};

		& > button {
			width: 100%;
			height: 3.438rem;
			border-radius: 15px;
			${theme.font.button_big};
			opacity: ${blur ? "40%" : "100%"};
			color: white;
			background-color: ${theme.color.main_Blue};

			&.cancle {
				color: ${theme.color.button_deactivated};
				background-color: ${theme.color.button_disabled};
				opacity: 100%;
			}
		}
	`;
};

export const FooterBtnSquare = (blur: boolean) => {
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
			background-color: ${theme.color.main_Blue};
			color: white;
			opacity: ${blur ? "40%" : "100%"};
			flex-grow: 1;

			&.cancle {
				color: ${theme.color.button_deactivated};
				background-color: ${theme.color.button_disabled};
				opacity: 100%;
			}
		}
	`;
};
