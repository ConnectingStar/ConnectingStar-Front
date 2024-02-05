import RightArrowIcon from "@/assets/icon/ic-right-arrow.svg?react";
import { layoutStyle, textStyle, versionTextStyle } from "@/components/MyPage/Button.style";

interface buttonProps {
	icon?: JSX.Element;
	text: string;
	hasArrowIcon: boolean;
	isVersion: boolean;
}

const Button = ({ icon, text, hasArrowIcon, isVersion }: buttonProps) => {
	return (
		<div css={layoutStyle}>
			{icon}
			<p css={textStyle}>
				{text}
				{isVersion && " 1.01.2"}
				{isVersion && <p css={versionTextStyle}>최신 버전 사용 중</p>}
			</p>
			{hasArrowIcon && <RightArrowIcon />}
		</div>
	);
};

export default Button;
