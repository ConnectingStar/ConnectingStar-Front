import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";

import { inputBoxStyle, inputStyle } from "@/components/Habit/CreateHabit/CreateHabit.style";

interface TimeInputProps {
	inputData: { noon: string; hour: string; minute: string };
	handleModalOpen: () => void;
}

const TimeInput = ({ inputData, handleModalOpen }: TimeInputProps) => {
	const isEmpty = inputData.noon === "" || inputData.hour === "" || inputData.minute === "";

	return (
		<div css={inputBoxStyle}>
			<span>언제</span>
			<div css={inputStyle} onClick={handleModalOpen}>
				<span>
					{isEmpty
						? "시간을 선택해주세요."
						: `${inputData.noon} ${inputData.hour}:${inputData.minute}`}
				</span>
				<DownArrowIcon />
			</div>
		</div>
	);
};

export default TimeInput;
