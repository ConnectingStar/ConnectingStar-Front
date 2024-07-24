import { useNavigate } from "react-router-dom";

import FooterBtn from "@/components/common/FooterBtn/FooterBtn";
import Modal from "@/components/common/Modal/Modal";

import { useAppDispatch } from "@/api/hooks";
import { closeModal } from "@/api/modal/modalSlice";

import { PATH } from "@/constants/path";

import type { HabitOneDayType } from "@/types/habit";

import {
	layoutStyle,
	behaviorBoxStyle,
	closeButtonBoxStyle,
} from "@/components/Habit/Modal/HabitRecordModal/HabitRecordModal.style";

interface HabitRecordModalProps {
	habitData: HabitOneDayType;
	year: number;
	month: number;
	date: number;
	noon: string;
	hour: number;
	minute: string;
}

const HabitRecordModal = ({
	habitData,
	year,
	month,
	date,
	noon,
	hour,
	minute,
}: HabitRecordModalProps) => {
	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	return (
		<Modal isBackdropClose={false}>
			<div css={layoutStyle}>
				<h1>아래의 습관을 실천했나요?</h1>
				<h2>{habitData.action}</h2>
				<div css={behaviorBoxStyle}>
					<span>
						{noon} {hour}:{minute}
					</span>
					<div />
					<span>
						{habitData.value} {habitData.unit}
					</span>
				</div>

				<FooterBtn
					leftText="쉬는 날 🙂"
					text="실천 완료 😎"
					isPositionStatic
					isTransparent
					handleLeftBtnClick={() => {
						navigate(
							PATH.REST_RECORD(
								String(habitData.runHabitId),
								String(year),
								String(month),
								String(date),
							),
						);
						dispatch(closeModal());
					}}
					handleBtnClick={() => {
						navigate(
							PATH.PRACTICE_RECORD(
								String(habitData.runHabitId),
								String(year),
								String(month),
								String(date),
							),
						);
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
