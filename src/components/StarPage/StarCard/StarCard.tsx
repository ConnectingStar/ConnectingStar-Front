import { Link } from "react-router-dom";

import starImg from "@/assets/image/img-card-detail-star.png";

import { StarCardStatus } from "@/types/star";

import { PATH } from "@/constants/path";
import { STAR_CARD_STATUS } from "@/constants/starPageConstants";

import { generateName } from "@/utils/starUtils";

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

const { PROGRESS, COMPLETE } = STAR_CARD_STATUS;

export default function StarCard({ id, title, subTitle, starNumber, image, state }: StarCardProps) {
	return (
		<li css={containerStyle}>
			<Link to={`${PATH.STAR_CARD}/${id}`}>
				<div css={imgStyle}>
					<img src={image} alt="별자리" />
					<div css={starImgStyle}>
						<img src={starImg} alt="노란색 별" />
						<strong>{starNumber}</strong>
					</div>
					{state === COMPLETE && <div css={haveLabelStyle}>보유</div>}
				</div>
				<div css={titleStyle}>
					<strong>{subTitle}</strong>
					<h3>{generateName(title, state)}</h3>
				</div>
				{state === PROGRESS && <div css={selectedStyle}></div>}
			</Link>
		</li>
	);
}
