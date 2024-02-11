import { useEffect } from "react";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";
import Portal from "@/components/common/Modal/Portal";

import { modalBackdropStyle, modalLayoutStyle } from "@/components/common/Modal/Modal.style";

interface modalType {
	children: React.ReactNode;
}

const Modal = ({ children }: modalType) => {
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
			<div css={modalLayoutStyle}>{children}</div>
		</Portal>
	);
};

export default Modal;
