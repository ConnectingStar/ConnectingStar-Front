import { ComponentPropsWithoutRef, ReactNode } from "react";

import ArrowLeftIcon from "@/assets/icon/arrow-left.svg?react";
import CloseIcon from "@/assets/icon/close.svg?react";
import { headerStyle } from "@/components/common/Header.style";

interface HeaderTitleProps {
	hasButton?: boolean;
	children: ReactNode;
}

export default function Header({ children }: { children: ReactNode }) {
	return <div css={headerStyle.container}>{children}</div>;
}

Header.PrevButton = function HeaderPrevButton() {
	return (
		<button
			type="button"
			css={headerStyle.iconButton}
			onClick={(e) => console.log("prev icon click: ", e)}
		>
			<ArrowLeftIcon />
		</button>
	);
};

// NOTE: 닫기 버튼 기능 구현은 어떻게 할지..
Header.CloseButton = function HeaderCloseButton() {
	return (
		<button
			type="button"
			css={headerStyle.iconButton}
			onClick={(e) => console.log("close icon click: ", e)}
		>
			<CloseIcon />
		</button>
	);
};

Header.Title = function HeaderTitle({ hasButton = true, children }: HeaderTitleProps) {
	return <h1 css={hasButton ? headerStyle.title : headerStyle.titleLarge}>{children}</h1>;
};

Header.TextButton = function HeaderTextButton({
	children,
	...props
}: ComponentPropsWithoutRef<"button">) {
	return (
		<button css={headerStyle.textButton} {...props}>
			{children}
		</button>
	);
};
