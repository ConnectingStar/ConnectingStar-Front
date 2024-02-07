import starImg from "@/assets/image/card-detail-star.png";
import { starImgStyle } from "@/components/CardDetail/Img/Star.style";

export default function Star({ children }: { children: React.ReactNode }) {
	return (
		<div css={starImgStyle}>
			<img src={starImg} alt="노란색 별" />
			<strong>{children}</strong>
		</div>
	);
}
