import InfoIcon from "@/assets/icon/ic-blue-exclamation-mark.svg?react";
import DownArrowIcon from "@/assets/icon/ic-down-arrow.svg?react";

import { convertFromTimeString } from "@/utils/time";

import {
	inputBoxStyle,
	inputStyle,
	inputTitleStyle,
} from "@/pages/CreateHabitPage/CreateHabitPage.style";

interface AlarmInputProps {
	inputData: string;
	handleModalOpen: () => void;
	isSecond?: boolean;
}

const AlarmInput = ({ inputData, handleModalOpen, isSecond }: AlarmInputProps) => {
	const isEmpty = inputData === "";

	return (
		<div css={inputBoxStyle}>
			<div css={inputTitleStyle}>
				<span>{isSecond ? "2차" : "1차"} 알림</span>
				<InfoIcon />
				<span className="infoText">
					{isSecond ? "습관 기록을 독려하는 알림이에요!" : "약속을 상기시켜 드리는 알림이에요!"}
				</span>
			</div>
			<div css={inputStyle(inputData !== "")} onClick={handleModalOpen}>
				<span>
					{isEmpty
						? `${isSecond ? "2차" : "1차"} 알림 시간을 선택해 주세요`
						: `${convertFromTimeString(inputData)}`}
				</span>
				<DownArrowIcon />
			</div>
		</div>
	);
};

export default AlarmInput;
