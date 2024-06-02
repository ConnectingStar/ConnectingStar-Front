import { Link } from "react-router-dom";

import starImg from "@/assets/image/img-card-detail-star.png";

import { StarCardStatus } from "@/types/star";

import {
	containerStyle,
	imgStyle,
	starImgStyle,
	haveLabelStyle,
	titleStyle,
	selectedStyle,
} from "@/components/StarPage/StarCard/StarCard.style";

interface StarCardProps {
	id: number;
	title: string;
	subTitle: string;
	starNumber: number;
	image: string;
	state: StarCardStatus;
}

export default function StarCard({ id, title, subTitle, starNumber, image, state }: StarCardProps) {
	return (
		<li css={containerStyle}>
			<Link to={`/star-card/${id}`}>
				<div css={imgStyle}>
					<img src={image} alt="별자리" />
					<div css={starImgStyle}>
						<img src={starImg} alt="노란색 별" />
						<strong>{starNumber}</strong>
					</div>
					{state === "COMPLETE" && <div css={haveLabelStyle}>보유</div>}
				</div>
				<div css={titleStyle}>
					<strong>{subTitle}</strong>
					<h3>{title}</h3>
				</div>
				{state === "PROGRESS" && <div css={selectedStyle}></div>}
			</Link>
		</li>
	);
}
