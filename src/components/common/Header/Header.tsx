import { ComponentPropsWithoutRef, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import ArrowLeftIcon from "@/assets/icon/ic-arrow-left.svg?react";
import CloseIcon from "@/assets/icon/ic-header-close.svg?react";

import {
	getContainerStyle,
	getTitleStyle,
	iconButtonStyle,
	textButtonStyle,
} from "@/components/common/Header/Header.style";

interface HeaderTitleProps {
	children: ReactNode;
	hasButton?: boolean;
}

interface HeaderProps {
	children: ReactNode;
	isFixed?: boolean;
}

export default function Header({ children, isFixed = true }: HeaderProps) {
	return <div css={getContainerStyle(isFixed)}>{children}</div>;
}

Header.PrevButton = function HeaderPrevButton() {
	const navigate = useNavigate();

	return (
		<button type="button" css={iconButtonStyle} onClick={() => navigate(-1)}>
			<ArrowLeftIcon />
		</button>
	);
};

// NOTE: 닫기 버튼 기능 구현은 어떻게 할지..
Header.CloseButton = function HeaderCloseButton() {
	return (
		<button
			type="button"
			css={iconButtonStyle}
			onClick={(e) => console.log("close icon click: ", e)}
		>
			<CloseIcon />
		</button>
	);
};

Header.Title = function HeaderTitle({ children, hasButton = true }: HeaderTitleProps) {
	return <h1 css={getTitleStyle(hasButton)}>{children}</h1>;
};

Header.TextButton = function HeaderTextButton({
	children,
	...props
}: ComponentPropsWithoutRef<"button">) {
	return (
		<button css={textButtonStyle} {...props}>
			{children}
		</button>
	);
};
