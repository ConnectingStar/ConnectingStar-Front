import { Link } from "react-router-dom";

import { css } from "@emotion/react";

import ArrowRightIcon from "@/assets/icon/ic-right-arrow-with-shadow.svg?react";
import star from "@/assets/image/img-3d-star.png";

import { PATH } from "@/constants/path";

import { theme } from "@/styles/theme";

import { getOutlineTextStyle } from "@/components/StarPage/StarMain/Star.style";

interface StarInfoProps {
	isProgress: boolean;
	starCount: number;
	starName: string;
	starCardId: number;
}

export default function StarInfo({ isProgress, starCount, starName, starCardId }: StarInfoProps) {
	return (
		<div css={containerStyle}>
			<div css={starCountStyle}>
				<img src={star} alt="3D 별" />
				<p>{starCount}</p>
			</div>

			{isProgress && (
				<Link to={`${PATH.STAR_CARD}/${starCardId}`} css={characterLinkStyle}>
					<span css={getOutlineTextStyle("#7400cf", "head_a")} data-text={starName}>
						{starName}
					</span>
					<ArrowRightIcon />
				</Link>
			)}
		</div>
	);
}

const containerStyle = css`
	width: 22.5rem;
	padding: 1.75rem 1.5rem 0;
	margin: 0 auto;
`;

const starCountStyle = css`
	width: fit-content;
	margin: 0 0 1.875rem 0.875rem;
	position: relative;

	img {
		width: 3.125rem;
		position: absolute;
		top: -0.5rem;
		left: -0.875rem;
	}

	p {
		padding: 0.1875rem 1.625rem 0.25rem 2.8125rem;
		border-radius: 15px;
		${theme.font.body_a_bold}
		color: #fff;
		background-color: #38567880; // main_deep_blue + 투명도 50%
	}
`;

const characterLinkStyle = css`
	display: flex;
	align-items: center;
`;
