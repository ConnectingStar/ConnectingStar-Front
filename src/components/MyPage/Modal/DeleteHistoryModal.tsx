import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";
import { layoutStyle } from "@/components/MyPage/Modal/LogoutModal";

import { deleteEndHabit } from "@/api/habit/habitThunk";
import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { useToast } from "@/hooks/useToast";

const DeleteHistoryModal = ({ quitHabitId }: { quitHabitId: number }) => {
	const dispatch = useAppDispatch();

	const { createToast } = useToast();

	return (
		<Modal isBackdropClose={false}>
			<div css={layoutStyle}>
				<h1>지난 히스토리를 삭제할까요?</h1>

				<FooterBtn
					text="삭제"
					leftText="취소"
					handleLeftBtnClick={() => dispatch(closeModal())}
					handleBtnClick={() => {
						dispatch(deleteEndHabit(quitHabitId));
						dispatch(closeModal());
						createToast("히스토리를 삭제했어요🙂");
					}}
					isPositionStatic
				/>
			</div>
		</Modal>
	);
};

export default DeleteHistoryModal;
