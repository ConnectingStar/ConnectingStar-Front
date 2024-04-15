import { useCallback, useEffect, useRef, useState } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { createPortal } from "react-dom";

import { toastVariantStyle, toastStyle } from "@/components/common/Toast/Toast.style";

export interface ToastProps extends ComponentPropsWithoutRef<"div"> {
	variant?: "default" | "success" | "error";
	showDuration?: number;
	onClose: () => void;
}

const Toast = ({
	variant = "default",
	showDuration = 3000,
	onClose,
	children,
	...attributes
}: ToastProps) => {
	const [isAdded, setIsAdded] = useState(true);
	const [isVisible, setIsVisible] = useState(true);

	const showAnimationRef = useRef<number>();
	const hideAnimationRef = useRef<number>();

	const handleClose = useCallback(() => {
		hideAnimationRef.current = setTimeout(() => {
			setIsAdded(false);
			onClose?.();
			clearTimeout(showAnimationRef.current);
		}, 600);
	}, [onClose]);

	useEffect(() => {
		showAnimationRef.current = setTimeout(() => {
			setIsVisible(false);
			handleClose();
		}, showDuration);

		return () => {
			clearTimeout(hideAnimationRef.current);
		};
	}, [handleClose, showDuration]);

	return isAdded
		? createPortal(
				<div css={[toastStyle(isVisible), toastVariantStyle(variant)]} {...attributes}>
					<span>{children}</span>
				</div>,
				document.getElementById("toast-container") as Element,
			)
		: createPortal(<div />, document.getElementById("toast-container") as Element);
};

export default Toast;
