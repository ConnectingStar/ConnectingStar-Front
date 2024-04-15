import { css } from "@emotion/react";

import { fadeIn, fadeOut, moveUp } from "@/styles/animation";

import type { ToastProps } from "@/components/common/Toast/Toast";

export const toastVariantStyle = (variant: Required<ToastProps>["variant"]) => {
	const style = {
		default: css({
			backgroundColor: "#828282",
		}),
		success: css({
			backgroundColor: "#828282",
		}),
		error: css({
			backgroundColor: "#828282",
		}),
	};

	return style[variant];
};

export const toastStyle = (isVisible: boolean) =>
	css({
		display: "flex",
		alignItems: "center",
		width: "22.5rem",
		height: "3.75rem",
		padding: "0 1rem",
		borderRadius: "15px",
		color: "#fff",
		animation: isVisible
			? `${fadeIn} 0.2s ease-in, ${moveUp} 0.2s ease-in`
			: `${fadeOut} 0.2s ease-in forwards`,
	});
