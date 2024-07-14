import { useNavigate } from "react-router-dom";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { PATH } from "@/constants/path";

import type { HabitType } from "@/types/habit";

import {
	layoutStyle,
	behaviorBoxStyle,
	closeButtonBoxStyle,
} from "@/components/Habit/Modal/HabitRecordModal/HabitRecordModal.style";

interface HabitRecordModalProps {
	habitData: HabitType;
}

const HabitRecordModal = ({ habitData }: HabitRecordModalProps) => {
	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	return (
		<Modal isBackdropClose={false}>
			<div css={layoutStyle}>
				<h1>아래의 습관을 실천했나요?</h1>
				<h2>{habitData.behavior}</h2>
				<div css={behaviorBoxStyle}>
					<span>
						{habitData.runTime.noon} {habitData.runTime.hour}:{habitData.runTime.minute}
					</span>
					<div />
					<span>
						{habitData.behaviorValue} {habitData.behaviorUnit}
					</span>
				</div>

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
						navigate(PATH.PRACTICE_RECORD(String(habitData.runHabitId)));
						dispatch(closeModal());
					}}
				/>
				<div css={closeButtonBoxStyle}>
					<button onClick={() => dispatch(closeModal())}>닫기</button>
				</div>
			</div>
		</Modal>
	);
};

export default HabitRecordModal;
