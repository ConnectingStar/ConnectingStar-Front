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
	isDateText?: boolean | undefined;
	isHabit?: boolean | undefined;
}

const Button = ({ title, subTitle, isToggle, isDateText, isHabit }: buttonType) => {
	const [toggleActive, setToggleActive] = useState(false);

	return (
		<div css={getLayoutStyle(isDateText, isHabit)}>
			<div css={getFlexStyle(isHabit)}>
				<h3>{title}</h3>
				{isToggle && (
					<div
						css={getToggleButtonStyle(toggleActive)}
						onClick={() => setToggleActive((prev) => !prev)}
					>
						<div />
					</div>
				)}
			</div>
			<h4>{subTitle}</h4>
			{isHabit && <button type="button">홈으로</button>}
		</div>
	);
};

export default Button;
