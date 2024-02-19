import { modifyModalStyle } from "@/components/homepages/ModifyModal/ModifyModal.style";

interface ModalProps {
	isModifyModal: boolean;
	setIsModifyModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModifyModal({ isModifyModal, setIsModifyModal }: ModalProps) {
	return (
		<div
			css={modifyModalStyle.container({ isModal: isModifyModal })}
			onClick={() => {
				setIsModifyModal(false);
			}}
		>
			<div css={modifyModalStyle.modalWrapper}>
				<span css={modifyModalStyle.modalTitle}>습관 수정</span>
				<span css={modifyModalStyle.modalButton}>수정하기</span>
			</div>
		</div>
	);
}

export default ModifyModal;
