import InfoIcon from "@/assets/icon/ic-blue-exclamation-mark.svg?react";
import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";

import {
	inputBoxStyle,
	inputStyle,
	inputTitleStyle,
} from "@/components/Habit/CreateHabit/CreateHabit.style";

interface AlarmInputProps {
	inputData: { noon: string; hour: string; minute: string };
	handleModalOpen: () => void;
	isSecond?: boolean;
}

const AlarmInput = ({ inputData, handleModalOpen, isSecond }: AlarmInputProps) => {
	const isEmpty = inputData.noon === "" || inputData.hour === "" || inputData.minute === "";

	return (
		<div css={inputBoxStyle}>
			<div css={inputTitleStyle}>
				<span>{isSecond ? "2차" : "1차"} 알림</span>
				<InfoIcon />
				<span className="infoText">
					{isSecond ? "습관 기록을 독려하는 알림이에요!" : "약속을 상기시켜 드리는 알림이에요!"}
				</span>
			</div>
			<div css={inputStyle()} onClick={handleModalOpen}>
				<span>
					{isEmpty
						? `${isSecond ? "2차" : "1차"} 알림 시간을 선택해 주세요`
						: `${inputData.noon} ${inputData.hour}:${inputData.minute}`}
				</span>
				<DownArrowIcon />
			</div>
		</div>
	);
};

export default AlarmInput;
