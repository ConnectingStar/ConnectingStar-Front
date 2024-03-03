import { useNavigate } from "react-router-dom";

import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { habitModifyModalStyle } from "@/components/Home/ModifyModal/HabitModifyModal.style";

function HabitModifyModal() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleClickHabits = (key: string | null = null) => {
		dispatch(closeModal());
		if (key) {
			navigate(`/habitsmanagement?id=${key}`);
		}
	};

	return (
		<Modal isBottomSheet>
			<div css={habitModifyModalStyle.modalWrapper}>
				<span css={habitModifyModalStyle.modalTitle}>습관 수정</span>
				<span onClick={() => handleClickHabits()}>수정하기</span>
			</div>
		</Modal>
	);
}

export default HabitModifyModal;
