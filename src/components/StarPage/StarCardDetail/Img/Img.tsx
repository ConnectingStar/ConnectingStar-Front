import Star from "@/components/StarPage/StarCardDetail/Img/Star";
import Label from "@/components/StarPage/StarCardDetail/Label";

import { imgStyle } from "@/components/StarPage/StarCardDetail/Img/Img.style";

interface ImgProps {
	state: "default" | "selected" | "have";
}

export default function Img({ state }: ImgProps) {
	return (
		<div css={imgStyle} className={state === "selected" ? "selected" : ""}>
			<img src="" alt="별자리" />
			{state === "have" && <Label type="have">보유</Label>}
			<Star starNumber={10} />
		</div>
	);
}
