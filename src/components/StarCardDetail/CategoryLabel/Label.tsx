import { labelStyle } from "@/components/StarCardDetail/CategoryLabel/Label.style";

export default function Label({ children }: { children: string }) {
	return <div css={labelStyle}>{children}</div>;
}
