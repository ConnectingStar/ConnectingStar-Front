import starImg from "@/assets/image/card-detail-star.png";
import { starImgStyle } from "@/components/CardDetail/Img/Star.style";

export default function Star({ starNumber }: { starNumber: number }) {
	return (
		<div css={starImgStyle}>
			<img src={starImg} alt="노란색 별" />
			<strong>{starNumber}</strong>
		</div>
	);
}
