import { useEffect } from "react";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";
import Portal from "@/components/common/Modal/Portal";

import { modalBackdropStyle, getModalLayoutStyle } from "@/components/common/Modal/Modal.style";

interface modalType {
	children: React.ReactNode;
	isBottomSheet?: boolean;
}

const Modal = ({ children, isBottomSheet }: modalType) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	return (
		<Portal elementId="modal">
			<div css={modalBackdropStyle} onClick={() => dispatch(closeModal())} />
			<div css={getModalLayoutStyle(isBottomSheet)}>{children}</div>
		</Portal>
	);
};

export default Modal;
