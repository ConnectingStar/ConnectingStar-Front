import { useState } from "react";

import {
	getLayoutStyle,
	getFlexStyle,
	getToggleButtonStyle,
} from "@/components/MyPage/NotificationSetting/Button.style";

interface buttonType {
	title: string;
	subTitle: string;
	isToggle?: boolean;
	isDateText?: boolean;
	isHabit?: boolean;
	isTextVisible?: boolean;
	onClick?: () => void;
}

const Button = ({
	title,
	subTitle,
	isToggle,
	isDateText,
	isHabit,
	isTextVisible,
	onClick,
}: buttonType) => {
	const [toggleActive, setToggleActive] = useState(false);

	const handleToggleClick = () => {
		setToggleActive((prev) => !prev);
		onClick && !toggleActive && onClick();
	};

	return (
		<div css={getLayoutStyle(isDateText, isHabit)}>
			<div css={getFlexStyle(isHabit)}>
				<h3>{title}</h3>
				{isToggle && (
					<div css={getToggleButtonStyle(toggleActive)} onClick={handleToggleClick}>
						<div />
					</div>
				)}
			</div>
			{isTextVisible ? toggleActive && <h4>{subTitle}</h4> : <h4>{subTitle}</h4>}

			{isHabit && <button type="button">홈으로</button>}
		</div>
	);
};

export default Button;
