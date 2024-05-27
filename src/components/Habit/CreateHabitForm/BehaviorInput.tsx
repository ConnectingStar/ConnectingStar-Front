import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";

import { inputBoxStyle, inputStyle } from "@/pages/CreateHabitPage/CreateHabitPage.style";

interface BehaviorInputProps {
	inputData: string;
	handleModalOpen: () => void;
}

const BehaviorInput = ({ inputData, handleModalOpen }: BehaviorInputProps) => {
	return (
		<div css={inputBoxStyle}>
			<span>무엇을</span>
			<div css={inputStyle()} onClick={handleModalOpen}>
				<span>{inputData === "" ? "습관을 선택해 주세요" : inputData}</span>
				<DownArrowIcon />
			</div>
		</div>
	);
};

export default BehaviorInput;
