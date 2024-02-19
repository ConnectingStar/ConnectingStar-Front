import RightArrowIcon from "@/assets/icon/ic-right-arrow.svg?react";

import { layoutStyle, textStyle, getSubTextStyle } from "@/components/MyPage/Button/Button.style";

interface buttonProps {
	icon?: JSX.Element;
	text: string;
	text2?: string;
	subText?: string;
	hasArrowIcon?: boolean;
	isSubText?: boolean;
	link?: string;
}

const Button = ({ icon, text, text2, subText, hasArrowIcon, isSubText, link }: buttonProps) => {
	return (
		<div css={layoutStyle}>
			<a href={link}>
				{icon}
				<p css={textStyle}>
					<span>
						{text}
						{text2 && <span className="sub">{text2}</span>}
						{text === "현재 버전" && " 1.01.2"}
					</span>
					{isSubText && <span css={getSubTextStyle(text === "간편로그인")}>{subText}</span>}
				</p>
				{hasArrowIcon && <RightArrowIcon />}
			</a>
		</div>
	);
};

export default Button;
