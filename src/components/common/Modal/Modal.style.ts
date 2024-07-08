import { css, keyframes } from "@emotion/react";

import { theme } from "@/styles/theme";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const modalShow = keyframes`
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0);
  }
`;

export const modalBackdropStyle = css`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: ${theme.zIndex.overlayMiddle};
	background-color: rgba(0, 0, 0, 0.9);
`;

export const getModalLayoutStyle = (isBottomSheet?: boolean, isFadeIn?: boolean) => {
	return css`
		position: fixed;
		display: block;
		left: ${isBottomSheet ? 0 : "50%"};
		top: ${!isBottomSheet && "50%"};
		transform: ${!isBottomSheet && "translate(-50%, -50%)"};
		bottom: ${isBottomSheet && 0};
		right: ${isBottomSheet && 0};
		z-index: ${theme.zIndex.overlayTop};
		overflow: auto;
		border: none;
		outline: none;
		animation: ${isBottomSheet &&
		css`
			${modalShow} 0.3s
		`};
		animation: ${isFadeIn &&
		css`
			${fadeIn} 2s
		`};
	`;
};
