import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { deleteHabit } from "@/api/habit/habitThunk";
import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { PATH } from "@/constants/path";

import { useToast } from "@/hooks/useToast";

import { theme } from "@/styles/theme";

interface HabitDeleteCheckModalProps {
	runHabitId?: string;
	reasonOfQuit: string;
}

const HabitDeleteCheckModal = ({ runHabitId, reasonOfQuit }: HabitDeleteCheckModalProps) => {
	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const { createToast } = useToast();

	const handleDeleteHabit = async () => {
		try {
			await dispatch(deleteHabit({ runHabitId, reasonOfQuit, visibility: true })).unwrap();
			createToast("습관을 삭제했어요. 다음 약속으로 만나요!");
			navigate(PATH.MAIN);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Modal isBackdropClose={false}>
			<div css={containerStyle}>
				<h1>기록이 완전히 삭제돼요!</h1>
				<p>
					해당 습관의 모든 기록이 영구적으로 삭제되어 나의 별자취와 통계에서
					<br />볼 수 없어요. 그래도 삭제할까요?
				</p>
				<FooterBtn
					text="삭제하기"
					leftText="취소"
					handleBtnClick={handleDeleteHabit}
					handleLeftBtnClick={() => dispatch(closeModal())}
					isPositionStatic
				/>
			</div>
		</Modal>
	);
};

export default HabitDeleteCheckModal;

const containerStyle = css`
	width: 18rem;
	padding: 1rem;
	border-radius: 15px;
	color: ${theme.color.font_black};
	background-color: #fff;

	h1 {
		margin-bottom: 1.25rem;
		font-size: 1.125rem;
		font-weight: 700;
	}

	p {
		margin-bottom: 2.5rem;
	}
`;
