import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const footerBtnStyle = (
	transparent?: boolean,
	isSquare?: boolean,
	isPositionStatic?: boolean,
) => {
	return css`
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: ${isSquare ? "3.44rem" : "5.5rem"};
		padding: ${!isSquare && "0 1.5rem"};
		gap: ${!isSquare && "0.5rem"};
		position: ${!isPositionStatic && "fixed"};
		bottom: ${!isPositionStatic && 0};
		background-color: ${transparent ? "transparent" : "white"};
		left: ${!isPositionStatic && "50%"};
		transform: ${!isPositionStatic && "translateX(-50%)"};

		& > button {
			width: 100%;
			height: 3.438rem;
			border-radius: ${!isSquare && "15px"};
			${theme.font.button_big};
			color: white;
			background-color: ${theme.color.main_Blue};

			&:disabled {
				opacity: 40%;
			}

			&.cancel {
				color: ${theme.color.button_deactivated};
				background-color: ${theme.color.button_disabled};
			}
		}
	`;
};
