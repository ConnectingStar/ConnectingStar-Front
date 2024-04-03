export interface HeaderProps {
	children: React.ReactNode;
	isFixed?: boolean;
}

export interface TitleProps {
	children: React.ReactNode;
	hasButton?: boolean;
}

export interface PrevButtonProps {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface CloseButtonProps {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}
