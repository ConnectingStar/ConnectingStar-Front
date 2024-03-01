import { titleStyle } from "@/components/StarPage/StarCardDetail/Title.style";

interface TitleProps {
	tag: "h1" | "h2";
	children: React.ReactNode;
}

export default function Title({ tag, children }: TitleProps) {
	const Tag = tag;

	return <Tag css={titleStyle[tag]}>{children}</Tag>;
}
