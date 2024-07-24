import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const footerBtnStyle = (
	transparent?: boolean,
	isSquare?: boolean,
	isPositionStatic?: boolean,
	buttonColor?: string,
) => {
	return css`
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: ${!isSquare && !isPositionStatic && "1rem 1.5rem"};
		gap: ${!isSquare && "0.5rem"};
		position: ${!isPositionStatic && "fixed"};
		bottom: ${!isPositionStatic && 0};
		background-color: ${!transparent && "#fff"};
		left: ${!isPositionStatic && "50%"};
		transform: ${!isPositionStatic && "translateX(-50%)"};

		& > button {
			width: 19.5rem;
			height: 3.438rem;
			border-radius: ${!isSquare && "15px"};
			${theme.font.button_big};
			color: white;
			background-color: ${buttonColor || theme.color.main_blue};

			&:disabled {
				opacity: 40%;
			}

			&.cancel {
				color: ${theme.color.font_deep_gray};
				background-color: ${theme.color.button_disabled};
			}
		}
	`;
};
