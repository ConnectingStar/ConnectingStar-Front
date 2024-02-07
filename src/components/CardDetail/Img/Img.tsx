import { imgStyle } from "@/components/CardDetail/Img/Img.style";
import PossessionLabel from "@/components/CardDetail/Img/PossessionLabel";
import Star from "@/components/CardDetail/Img/Star";

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
