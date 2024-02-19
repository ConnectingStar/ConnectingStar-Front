import CloseIcon from "@/assets/icon/ic-close.svg?react";

import DeleteHistoryModal from "@/components/MyPage/HabitHistory/DeleteHistoryModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";

import {
	layoutStyle,
	textBoxStyle,
	textStyle,
} from "@/components/MyPage/HabitHistory/HabitCard.style";

interface habitCardDataType {
	id: number;
	isEnd: boolean;
	title: string;
	startDate: string;
	endDate?: string;
	successCount: number;
	failCount: number;
	endReason?: string;
}

const HabitCard = ({
	id,
	isEnd,
	title,
	startDate,
	endDate,
	successCount,
	failCount,
	endReason,
}: habitCardDataType) => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	return (
		<div css={layoutStyle}>
			{isEnd && <CloseIcon onClick={() => dispatch(openModal(modalType.DELETE_HISTORY(id)))} />}
			<h1>{title}</h1>

			{isEnd ? (
				<div css={textBoxStyle}>
					<p css={textStyle}>
						<span>시작일 : {startDate}</span>
						<span>종료일 : {endDate}</span>
					</p>
					<p css={textStyle}>
						<span>실천 : {successCount}</span>
						<span>휴식 : {failCount}</span>
					</p>
					<p css={textStyle}>
						<span>종료 사유 : {endReason}</span>
					</p>
				</div>
			) : (
				<p css={textStyle}>
					<span>시작일 : {startDate}</span>
					<span>실천 : {successCount}</span>
					<span>휴식 : {failCount}</span>
				</p>
			)}
			{modal === modalType.DELETE_HISTORY(id) && <DeleteHistoryModal />}
		</div>
	);
};

export default HabitCard;
