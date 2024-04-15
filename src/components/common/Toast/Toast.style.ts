import { css } from "@emotion/react";

import { fadeIn, fadeOut, moveUp } from "@/styles/animation";

import type { ToastProps } from "@/components/common/Toast/Toast";

export const toastVariantStyle = (variant: Required<ToastProps>["variant"]) => {
	const style = {
		default: css({
			backgroundColor: "rgba(0,0,0,0.2)",
		}),
		success: css({
			backgroundColor: "rgba(0,0,0,0.2)",
		}),
		error: css({
			backgroundColor: "rgba(0,0,0,0.2)",
		}),
	};

	return style[variant];
};

export const toastStyle = (isVisible: boolean) => css`
	bottom: 87px;
	display: flex;
	align-items: center;
	width: 100%;
	height: 60px;
	padding: 0 16px;
	border-radius: 15px;
	color: #fff;
	animation: ${isVisible
		? `${fadeIn} 0.2s ease-in, ${moveUp} 0.2s ease-in`
		: `${fadeOut} 0.2s ease-in forwards`};
`;
