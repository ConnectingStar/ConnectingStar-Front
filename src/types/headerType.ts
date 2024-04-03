import { PropsWithChildren } from "react";

export interface HeaderProps extends PropsWithChildren {
	isFixed?: boolean;
}

export interface TitleProps extends PropsWithChildren {
	hasButton?: boolean;
}

export interface IconButtonProps {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
