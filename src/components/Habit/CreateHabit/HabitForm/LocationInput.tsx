import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";

import { inputBoxStyle, inputStyle } from "@/components/Habit/CreateHabit/CreateHabit.style";

interface LocationInputProps {
	inputData: string;
	handleModalOpen: () => void;
}

const LocationInput = ({ inputData, handleModalOpen }: LocationInputProps) => {
	return (
		<div css={inputBoxStyle}>
			<span>어디서</span>
			<div css={inputStyle} onClick={handleModalOpen}>
				<span>{inputData === "" ? "장소를 선택해주세요." : inputData}</span>
				<DownArrowIcon />
			</div>
		</div>
	);
};

export default LocationInput;
