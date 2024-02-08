import { imgStyle } from "@/components/StarCardDetail/Img/Img.style";
import Star from "@/components/StarCardDetail/Img/Star";
import Label from "@/components/StarCardDetail/Label";

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
