import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

function HabitCheckModal({ text }: { text: string }) {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	return (
		<Modal>
			<div css={layoutStyle}>
				<div>
					<h1>아래의 습관을 실천하였나요?</h1>
					<p>{text}</p>
				</div>
				<FooterBtn
					leftText="쉬는 날 🙂"
					text="실천 완료 😎"
					isPositionStatic
					isTransparent
					handleLeftBtnClick={() => {
						navigate("/rest-record");
						dispatch(closeModal());
					}}
					handleBtnClick={() => {
						navigate("/habit-record");
						dispatch(closeModal());
					}}
				/>
			</div>
		</Modal>
	);
}

export default HabitCheckModal;

export const layoutStyle = css`
	width: 18rem;
	height: 13.75rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 15px;
	background-color: #fff;
	padding: 1rem;

	& > div:first-of-type {
		& > h1 {
			font-size: 1.125rem;
			font-weight: 700;
			margin-bottom: 1.25rem;
		}
		& > p {
			margin-bottom: 2.5rem;
		}
	}
`;
