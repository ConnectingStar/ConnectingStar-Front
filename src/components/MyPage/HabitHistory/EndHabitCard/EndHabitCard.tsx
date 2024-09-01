import CloseIcon from "@/assets/icon/ic-close.svg?react";

import DeleteHistoryModal from "@/components/MyPage/Modal/DeleteHistoryModal";

import { useAppDispatch, useAppSelector } from "@/api/hooks";
import { openModal } from "@/api/modal/modalSlice";

import { modalType } from "@/constants/modalConstants";

import { dateFormat } from "@/utils/dateFormat";
import { convertFromTimeString } from "@/utils/time";

import type { EndHabitType } from "@/types/habit";

import {
	layoutStyle,
	textBoxStyle,
	textStyle,
} from "@/components/MyPage/HabitHistory/HabitCard/HabitCard.style";

interface HabitCardProps {
	habitData: EndHabitType;
}

const EndHabitCard = ({ habitData }: HabitCardProps) => {
	const dispatch = useAppDispatch();

	const { modal } = useAppSelector((state) => state.modal);

	return (
		<div css={layoutStyle}>
			<h1>
				{`${convertFromTimeString(habitData.runTime)?.split(" ")[0]} ${convertFromTimeString(habitData.runTime)?.split(" ")[1].split(":")[0]}시 ${convertFromTimeString(habitData.runTime)?.split(" ")[1].split(":")[1]}분에 ${habitData.place}에서 ${habitData.action} ${habitData.value} ${habitData.unit}`}
			</h1>

			<CloseIcon
				onClick={() => dispatch(openModal(modalType.DELETE_HISTORY(habitData.quitHabitId)))}
			/>

			<div css={textBoxStyle}>
				<p css={textStyle}>
					<span>시작일 : {dateFormat(new Date(habitData.startDate), "POINT")}</span>
					<span>종료일 : {dateFormat(new Date(habitData.quitDate), "POINT")}</span>
				</p>
				<p css={textStyle}>
					<span>실천 : {habitData.completedHistoryCount}</span>
					<span>휴식 : {habitData.restHistoryCount}</span>
				</p>
				<p css={textStyle}>
					<span>종료 사유 : {habitData.reasonOfQuit}</span>
				</p>
			</div>

			{modal === modalType.DELETE_HISTORY(habitData.quitHabitId) && <DeleteHistoryModal />}
		</div>
	);
};

export default EndHabitCard;
