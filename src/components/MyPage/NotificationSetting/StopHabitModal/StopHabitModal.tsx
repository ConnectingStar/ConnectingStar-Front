import Modal from "@/components/common/Modal/Modal";
import Calender from "@/components/MyPage/NotificationSetting/StopHabitModal/Calendar/Calender";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import {
	layoutStyle,
	buttonBoxStyle,
} from "@/components/MyPage/NotificationSetting/StopHabitModal/StopHabitModal.style";

const StopHabitModal = () => {
	const dispatch = useAppDispatch();

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>일시 정지 기간을 선택해주세요</h1>
				<Calender />

				<div css={buttonBoxStyle}>
					<button type="button" className="cancel" onClick={() => dispatch(closeModal())}>
						취소
					</button>
					<button type="button" onClick={() => dispatch(closeModal())}>
						선택 완료
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default StopHabitModal;
