import starImg from "@/assets/image/card-detail-star.png";

import { imgStyle, labelStyle, starImgStyle } from "@/components/StarPage/StarCardDetail/Img.style";

interface ImgProps {
	state: "default" | "selected" | "have";
}

export default function Img({ state }: ImgProps) {
	return (
		<div css={imgStyle} className={state === "selected" ? "selected" : ""}>
			<img src="" alt="별자리" />
			{state === "have" && <div css={labelStyle}>보유</div>}
			<div css={starImgStyle}>
				<img src={starImg} alt="노란색 별" />
				{/* TODO: API 연결 후 수정 예정 */}
				<strong>{10}</strong>
			</div>
		</div>
	);
}
