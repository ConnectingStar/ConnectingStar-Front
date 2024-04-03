import { ComponentPropsWithoutRef } from "react";
import { useNavigate } from "react-router-dom";

import ArrowLeftIcon from "@/assets/icon/ic-arrow-left.svg?react";
import CloseIcon from "@/assets/icon/ic-header-close.svg?react";

import { HeaderProps, TitleProps, PrevButtonProps, CloseButtonProps } from "@/types/headerType";

import {
	getContainerStyle,
	getTitleStyle,
	iconButtonStyle,
	textButtonStyle,
} from "@/components/common/Header/Header.style";

export default function Header({ children, isFixed = true }: HeaderProps) {
	return <div css={getContainerStyle(isFixed)}>{children}</div>;
}

Header.Title = function HeaderTitle({ children, hasButton = true }: TitleProps) {
	return <h1 css={getTitleStyle(hasButton)}>{children}</h1>;
};

Header.PrevButton = function HeaderPrevButton({ onClick }: PrevButtonProps) {
	const navigate = useNavigate();

	return (
		<button type="button" css={iconButtonStyle} onClick={onClick || (() => navigate(-1))}>
			<ArrowLeftIcon />
		</button>
	);
};

Header.CloseButton = function HeaderCloseButton({ onClick }: CloseButtonProps) {
	return (
		<button type="button" css={iconButtonStyle} onClick={onClick}>
			<CloseIcon />
		</button>
	);
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
