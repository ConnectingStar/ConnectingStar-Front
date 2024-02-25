import { css } from "@emotion/react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";
import Calender from "@/components/MyPage/NotificationSetting/StopHabitModal/Calendar/Calender";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { theme } from "@/styles/theme";

const StopHabitModal = ({
	startDay,
	setStartDay,
	endDay,
	setEndDay,
}: {
	startDay: Date;
	setStartDay: React.Dispatch<React.SetStateAction<Date>>;
	endDay: Date;
	setEndDay: React.Dispatch<React.SetStateAction<Date>>;
}) => {
	const dispatch = useAppDispatch();

	return (
		<Modal isBottomSheet>
			<div css={layoutStyle}>
				<h1>일시 정지 기간을 선택해주세요</h1>
				<Calender
					startDay={startDay}
					setStartDay={setStartDay}
					endDay={endDay}
					setEndDay={setEndDay}
				/>

				<FooterBtn
					text="선택 완료"
					leftText="취소"
					handleBtnClick={() => dispatch(closeModal())}
					handleLeftBtnClick={() => dispatch(closeModal())}
				/>
			</div>
		</Modal>
	);
};

export default StopHabitModal;

const layoutStyle = css`
	padding: 1.125rem 1.5rem;
	border-radius: 15px 15px 0 0;
	color: ${theme.color.font_black};
	background-color: #fff;

	& > h1 {
		color: ${theme.color.font_black};
		${theme.font.header};
	}
`;
