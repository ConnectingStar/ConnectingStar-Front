import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";

import { inputBoxStyle, inputStyle } from "@/pages/CreateHabitPage/CreateHabitPage.style";

interface LocationInputProps {
	inputData: string;
	handleModalOpen: () => void;
}

const LocationInput = ({ inputData, handleModalOpen }: LocationInputProps) => {
	return (
		<div css={inputBoxStyle}>
			<span>어디서</span>
			<div css={inputStyle(inputData !== "")} onClick={handleModalOpen}>
				<span>{inputData === "" ? "장소를 선택해 주세요" : inputData}</span>
				<DownArrowIcon />
			</div>
		</div>
	);
};

export default LocationInput;
