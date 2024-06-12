import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { PATH } from "@/constants/path";

interface HabitRecordModalProps {
	text: string;
	habitId: number;
}

const HabitRecordModal = ({ text, habitId }: HabitRecordModalProps) => {
	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	return (
		<Modal>
			<div css={layoutStyle}>
				<h1>아래의 습관을 실천했나요?</h1>
				<p>{text}</p>

				<FooterBtn
					leftText="쉬는 날 🙂"
					text="실천 완료 😎"
					isPositionStatic
					isTransparent
					handleLeftBtnClick={() => {
						navigate(PATH.REST_RECORD);
						dispatch(closeModal());
					}}
					handleBtnClick={() => {
						navigate(PATH.PRACTICE_RECORD(String(habitId)));
						dispatch(closeModal());
					}}
				/>
			</div>
		</Modal>
	);
};

export default HabitRecordModal;

const layoutStyle = css`
	width: 18rem;
	height: 13.75rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 15px;
	background-color: #fff;
	padding: 1rem;

	& > h1 {
		font-size: 1.125rem;
		font-weight: 700;
		margin-bottom: 1.25rem;
	}

	& > p {
		margin-bottom: 2.5rem;
	}
`;
