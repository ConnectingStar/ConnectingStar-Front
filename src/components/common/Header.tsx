import { ComponentPropsWithoutRef, ReactNode } from "react";

import ArrowLeftIcon from "@/assets/icon/arrow-left.svg?react";
import CloseIcon from "@/assets/icon/close.svg?react";
import { headerStyle } from "@/components/common/Header.style";

// NOTE: 이 부분 props 이름을 어떻게 지어야 할지 모르겠음. size는 명확하지 않은듯
interface HeaderTitleProps {
	size?: "default" | "large";
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

Header.Title = function HeaderTitle({ size = "default", children }: HeaderTitleProps) {
	return <h1 css={size === "large" ? headerStyle.titleLarge : headerStyle.title}>{children}</h1>;
};

// NOTE: ActionButton이라는 이름보다 더 괜찮은 이름 없는지
Header.ActionButton = function HeaderActionButton({
	children,
	...props
}: ComponentPropsWithoutRef<"button">) {
	return (
		<button css={headerStyle.actionButton} {...props}>
			{children}
		</button>
	);
};
