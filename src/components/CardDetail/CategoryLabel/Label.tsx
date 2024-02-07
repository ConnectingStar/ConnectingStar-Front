import { labelStyle } from "@/components/CardDetail/CategoryLabel/Label.style";

export default function Label({ children }: { children: string }) {
	return <div css={labelStyle}>{children}</div>;
}
