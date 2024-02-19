import RightArrowIcon from "@/assets/icon/ic-right-arrow.svg?react";

import { layoutStyle, textStyle, getSubTextStyle } from "@/components/MyPage/Button/Button.style";

interface buttonProps {
	icon?: JSX.Element;
	text: string;
	subText?: string;
	hasArrowIcon?: boolean;
	isVersion?: boolean;
	isSubText?: boolean;
}

const Button = ({ icon, text, subText, hasArrowIcon, isSubText }: buttonProps) => {
	return (
		<div css={layoutStyle}>
			{icon}
			<p css={textStyle}>
				{text}
				{text === "현재 버전" && " 1.01.2"}
				{isSubText && <p css={getSubTextStyle(text === "간편로그인")}>{subText}</p>}
			</p>
			{hasArrowIcon && <RightArrowIcon />}
		</div>
	);
};

export default Button;
