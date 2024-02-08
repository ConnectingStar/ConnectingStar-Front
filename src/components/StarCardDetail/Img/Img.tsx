import { imgStyle } from "@/components/StarCardDetail/Img/Img.style";
import PossessionLabel from "@/components/StarCardDetail/Img/PossessionLabel";
import Star from "@/components/StarCardDetail/Img/Star";

interface ImgProps {
	state: "default" | "selected" | "possession";
}

export default function Img({ state }: ImgProps) {
	return (
		<div css={imgStyle} className={state === "selected" ? "selected" : ""}>
			<img src="" alt="별자리" />
			{state === "possession" && <PossessionLabel />}
			<Star starNumber={10} />
		</div>
	);
}
