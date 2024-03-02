import Star from "@/components/StarPage/StarCardDetail/Img/Star";

import { imgStyle, labelStyle } from "@/components/StarPage/StarCardDetail/Img/Img.style";

interface ImgProps {
	state: "default" | "selected" | "have";
}

export default function Img({ state }: ImgProps) {
	return (
		<div css={imgStyle} className={state === "selected" ? "selected" : ""}>
			<img src="" alt="별자리" />
			{state === "have" && <div css={labelStyle}>보유</div>}
			<Star starNumber={10} />
		</div>
	);
}
