import RightArrowIcon from "@/assets/icon/ic-right-arrow.svg?react";

import {
	layoutStyle,
	textStyle,
	getSubTextStyle,
} from "@/components/common/Button/MenuButton/MenuButton.style";

interface MenuButtonProps {
	icon?: JSX.Element;
	title: string;
	content?: string;
	hasArrowIcon?: boolean;
	isSubText?: boolean;
	link?: string;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const MenuButton = ({ icon, title, content, hasArrowIcon, link, onClick }: MenuButtonProps) => {
	return (
		<div css={layoutStyle} onClick={onClick}>
			<a href={link}>
				{icon}
				<p css={textStyle}>
					<span>
						{title}
						{title === "습관 현황" && <span className="sub">히스토리</span>}

						{title === "현재 버전" && " 1.01.2"}
					</span>
					{content && <span css={getSubTextStyle(title === "간편로그인")}>{content}</span>}
				</p>
				{hasArrowIcon && <RightArrowIcon />}
			</a>
		</div>
	);
};

export default MenuButton;
