import RightArrowIcon from "@/assets/icon/ic-right-arrow.svg?react";

import { layoutStyle, textStyle, getSubTextStyle } from "@/components/MyPage/Button/Button.style";

interface buttonProps {
	icon?: JSX.Element;
	text: string;
	subText?: string;
	hasArrowIcon?: boolean;
	isVersion?: boolean;
	isSubText?: boolean;
	link: string | undefined;
}

const Button = ({ icon, text, subText, hasArrowIcon, isSubText, link }: buttonProps) => {
	return (
		<div css={layoutStyle}>
			<a href={link}>
				{icon}
				<p css={textStyle}>
					{text}
					{text === "현재 버전" && " 1.01.2"}
					{isSubText && <span css={getSubTextStyle(text === "간편로그인")}>{subText}</span>}
				</p>
				{hasArrowIcon && <RightArrowIcon />}
			</a>
		</div>
	);
};

export default Button;
