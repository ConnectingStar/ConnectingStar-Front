import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";

import { inputBoxStyle, inputStyle } from "@/components/Habit/CreateHabit/CreateHabit.style";

interface IdentityInputProps {
	inputData: string;
	handleModalOpen: () => void;
}

const IdentityInput = ({ inputData, handleModalOpen }: IdentityInputProps) => {
	return (
		<div css={inputBoxStyle}>
			<span>정체성</span>
			<div css={inputStyle()} onClick={handleModalOpen}>
				<span>{inputData === "" ? "정체성을 선택해 주세요" : inputData}</span>
				<DownArrowIcon />
			</div>
		</div>
	);
};

export default IdentityInput;
