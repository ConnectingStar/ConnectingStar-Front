import { labelStyle } from "@/components/StarCardDetail/Label.style";

interface LabelProps {
	children: string;
	type: "category" | "have";
}

export default function Label({ children, type }: LabelProps) {
	return <div css={labelStyle[type]}>{children}</div>;
}
