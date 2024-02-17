import { css, keyframes } from "@emotion/react";

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
	z-index: 49;
	background-color: rgba(0, 0, 0, 0.8);
`;

export const getModalLayoutStyle = (isBottomSheet: boolean | undefined) => {
	return css`
		position: fixed;
		display: block;
		left: ${isBottomSheet ? 0 : "50%"};
		top: ${!isBottomSheet && "50%"};
		transform: ${!isBottomSheet && "translate(-50%, -50%)"};
		bottom: ${isBottomSheet && 0};
		right: ${isBottomSheet && 0};
		z-index: 50;
		overflow: auto;
		border: none;
		outline: none;
		animation: ${isBottomSheet &&
		css`
			${modalShow} 0.3s
		`};
	`;
};
