import starImg from "@/assets/image/card-detail-star.png";

import {
	containerStyle,
	imgStyle,
	starImgStyle,
	haveLabelStyle,
	titleStyle,
} from "@/components/StarPage/StarCard.style";

// TODO: API 연결 후 삭제 or 수정 예정
interface StarCardProps {
	title: string;
	subTitle: string;
	starNumber: number;
	state: "default" | "selected" | "have";
}

export default function StarCard({ title, subTitle, starNumber, state }: StarCardProps) {
	return (
		<li css={containerStyle} className={state === "selected" ? "selected" : ""}>
			<div css={imgStyle}>
				<img src="" alt="별자리" />
				<div css={starImgStyle}>
					<img src={starImg} alt="노란색 별" />
					<strong>{starNumber}</strong>
				</div>
				{state === "have" && <div css={haveLabelStyle}>보유</div>}
			</div>
			<div css={titleStyle}>
				<strong>{subTitle}</strong>
				<h3>{title}</h3>
			</div>
		</li>
	);
}
