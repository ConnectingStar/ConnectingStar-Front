import { titleStyle } from "@/components/StarCardDetail/Title.style";

interface TitleProps {
	as: "h1" | "h2";
	children: React.ReactNode;
}

export default function Title({ as, children }: TitleProps) {
	const As = as;

	return <As css={titleStyle[as]}>{children}</As>;
}
