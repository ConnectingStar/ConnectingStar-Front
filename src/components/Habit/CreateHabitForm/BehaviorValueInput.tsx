import { inputStyle, inputUnitBoxStyle } from "@/pages/CreateHabitPage/CreateHabitPage.style";

interface BehaviorValueInputProps {
	inputValueData: number | null;
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
			<div css={inputStyle(inputValueData !== null, "6.25rem")} onClick={handleModalOpen}>
				<span>{inputValueData === null ? "숫자 입력" : inputValueData}</span>
			</div>
			<div css={inputStyle(inputUnitData !== "", "12.875rem")} onClick={handleModalOpen}>
				<span>{inputUnitData === "" ? "단위 입력 (예: 페이지)" : inputUnitData}</span>
			</div>
		</div>
	);
};

export default BehaviorValueInput;
