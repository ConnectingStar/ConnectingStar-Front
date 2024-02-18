import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const footerBtnStyle = (
	transparent?: boolean,
	isSquare?: boolean,
	isPositionStatic?: boolean,
) => {
	return css`
		${isPositionStatic ? null : "position: fixed;bottom: 0;left: 50%;	transform: translateX(-50%);"}
		width: 22.5rem;
		height: 5.5rem;
		padding: 1.063rem 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		width: ${isPositionStatic || isSquare ? "100%" : "22.5rem"};
		padding: ${!isSquare && !isPositionStatic && "1rem 1.5rem"};
		gap: ${!isSquare && "0.5rem"};
		position: ${!isPositionStatic && "fixed"};
		bottom: ${!isPositionStatic && 0};
		background-color: ${!transparent && "white"};
		left: ${!isPositionStatic && "50%"};
		transform: ${!isPositionStatic && "translateX(-50%)"};

		& > button {
			width: 100%;
			height: 3.438rem;
			border-radius: ${!isSquare && "15px"};
			${theme.font.button_big};
			color: white;
			background-color: ${theme.color.main_blue};

			&:disabled {
				opacity: 40%;
			}

			&.cancel {
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
