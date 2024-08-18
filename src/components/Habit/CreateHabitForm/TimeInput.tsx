import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";

import { convertFromTimeString } from "@/utils/time";

import { inputBoxStyle, inputStyle } from "@/pages/CreateHabitPage/CreateHabitPage.style";

interface TimeInputProps {
	inputData: string;
	handleModalOpen: () => void;
}

const TimeInput = ({ inputData, handleModalOpen }: TimeInputProps) => {
	const isEmpty = inputData === "";

	return (
		<div css={inputBoxStyle}>
			<span>언제</span>
			<div css={inputStyle(inputData !== "")} onClick={handleModalOpen}>
				<span>{isEmpty ? "시간을 선택해 주세요" : `${convertFromTimeString(inputData)}`}</span>
				<DownArrowIcon />
			</div>
		</div>
	);
};

export default TimeInput;
