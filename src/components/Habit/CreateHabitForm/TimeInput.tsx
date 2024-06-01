import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";

import { inputBoxStyle, inputStyle } from "@/pages/CreateHabitPage/CreateHabitPage.style";

interface TimeInputProps {
	inputData: { noon: string; hour: string; minute: string };
	handleModalOpen: () => void;
}

const TimeInput = ({ inputData, handleModalOpen }: TimeInputProps) => {
	const isEmpty = inputData.noon === "" || inputData.hour === "" || inputData.minute === "";

	return (
		<div css={inputBoxStyle}>
			<span>언제</span>
			<div css={inputStyle(inputData.noon !== "")} onClick={handleModalOpen}>
				<span>
					{isEmpty
						? "시간을 선택해 주세요"
						: `${inputData.noon} ${inputData.hour}:${inputData.minute}`}
				</span>
				<DownArrowIcon />
			</div>
		</div>
	);
};

export default TimeInput;