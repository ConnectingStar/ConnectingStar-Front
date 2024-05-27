import { inputStyle, inputUnitBoxStyle } from "@/components/Habit/CreateHabit/CreateHabit.style";

interface BehaviorValueInputProps {
	inputValueData: string;
	inputUnitData: string;
	handleModalOpen: () => void;
}

const BehaviorValueInput = ({
	inputValueData,
	inputUnitData,
	handleModalOpen,
}: BehaviorValueInputProps) => {
	return (
		<div css={inputUnitBoxStyle}>
			<div css={inputStyle("6.25rem")} onClick={handleModalOpen}>
				<span>{inputValueData === "" ? "숫자 입력" : inputValueData}</span>
			</div>
			<div css={inputStyle("12.875rem")} onClick={handleModalOpen}>
				<span>{inputUnitData === "" ? "단위 입력 (예: 페이지)" : inputUnitData}</span>
			</div>
		</div>
	);
};

export default BehaviorValueInput;
