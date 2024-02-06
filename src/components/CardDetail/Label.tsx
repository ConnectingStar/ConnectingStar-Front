import { labelStyle } from "@/components/CardDetail/Label.style";

export default function Label({ children }: { children: string }) {
	return <div css={labelStyle}>{children}</div>;
}
