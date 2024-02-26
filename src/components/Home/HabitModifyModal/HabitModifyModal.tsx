import { useNavigate } from "react-router-dom";

import Modal from "@/components/common/Modal/Modal";
import { HabitsElement } from "@/types/homeTypes";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { habitModifyModalStyle } from "@/components/Home/HabitModifyModal/HabitModifyModal.style";

interface ModalProps {
	modalTarget: HabitsElement | null;
}

function HabitModifyModal({ modalTarget }: ModalProps) {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleClickHabits = (key: string | null = null) => {
		dispatch(closeModal());
		if (key) {
			navigate(`/habitsmanagement/targetDate?id=${modalTarget?.key}`);
		}
	};

	return (
		<Modal isBottomSheet>
			<div css={habitModifyModalStyle.modalWrapper}>
				<span css={habitModifyModalStyle.modalTitle}>습관 수정</span>
				<span onClick={() => handleClickHabits()} className="options">
					수정하기
				</span>
			</div>
		</Modal>
	);
}

export default HabitModifyModal;
