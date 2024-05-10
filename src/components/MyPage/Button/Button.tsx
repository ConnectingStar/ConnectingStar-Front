import RightArrowIcon from "@/assets/icon/ic-right-arrow.svg?react";

import { layoutStyle, textStyle, getSubTextStyle } from "@/components/MyPage/Button/Button.style";

interface buttonProps {
	icon?: JSX.Element;
	text: string;
	subText?: string;
	hasArrowIcon?: boolean;
	isSubText?: boolean;
	link?: string;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Button = ({ icon, text, subText, hasArrowIcon, isSubText, link, onClick }: buttonProps) => {
	return (
		<div css={layoutStyle} onClick={onClick}>
			<a href={link}>
				{icon}
				<p css={textStyle}>
					<span>
						{text}
						{text === "습관 현황" && <span className="sub">히스토리</span>}

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
