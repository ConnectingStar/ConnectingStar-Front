import Toggle from "@/components/common/Button/Toggle/Toggle";

import {
	getLayoutStyle,
	getFlexStyle,
} from "@/components/common/Button/ToggleButton/ToggleButton.style";

interface buttonType {
	title: string;
	subTitle: string;
	alarmTime?: string;
	hasToggle?: boolean;
	isToggle?: boolean;
	isDateText?: boolean;
	isTextVisible?: boolean;
	onClick?: () => void;
	handleTogglePrev?: () => void;
}

const ToggleButton = ({
	title,
	subTitle,
	alarmTime,
	hasToggle,
	isToggle,
	isDateText,
	isTextVisible,
	onClick,
	handleTogglePrev,
}: buttonType) => {
	return (
		<div css={getLayoutStyle(isDateText)}>
			<div css={getFlexStyle}>
				<h3>
					{title}
					{alarmTime && <span>{alarmTime}</span>}
				</h3>

				{hasToggle && (
					<Toggle isToggle={isToggle} handleTogglePrev={handleTogglePrev} onClick={onClick} />
				)}
			</div>
			{isTextVisible ? isToggle && <h4>{subTitle}</h4> : <h4>{subTitle}</h4>}
		</div>
	);
};

export default ToggleButton;
