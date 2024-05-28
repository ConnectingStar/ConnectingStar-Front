import starImg from "@/assets/image/img-card-detail-star.png";

import { StarCardDetailStatus } from "@/types/star";

import { imgStyle, labelStyle, starImgStyle } from "@/components/StarPage/StarCardDetail/Img.style";

interface ImgProps {
	state: StarCardDetailStatus;
	image: string;
	starCount: number;
}

export default function Img({ state, image, starCount }: ImgProps) {
	return (
		<div css={imgStyle} className={state === "PROGRESS" ? "selected" : ""}>
			<img src={image} alt="별자리" />
			{state === "COMPLETE" && <div css={labelStyle}>보유</div>}
			<div css={starImgStyle}>
				<img src={starImg} alt="노란색 별" />
				<strong>{starCount}</strong>
			</div>
		</div>
	);
}
