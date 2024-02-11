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

export const modalLayoutStyle = css`
	position: fixed;
	display: block;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 50;
	overflow: auto;
	border: none;
	outline: none;
	animation: ${modalShow} 0.3s;
`;
