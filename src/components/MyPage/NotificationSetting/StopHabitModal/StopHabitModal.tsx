import Modal from "@/components/common/Modal/Modal";

import Calender from "./Calendar/Calender";

import { layoutStyle } from "@/components/MyPage/NotificationSetting/StopHabitModal/StopHabitModal.style";

const StopHabitModal = () => {
	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>일시 정지 기간을 선택해주세요</h1>
				<Calender />
			</div>
		</Modal>
	);
};

export default StopHabitModal;
