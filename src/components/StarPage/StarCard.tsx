import { css } from "@emotion/react";

import starImg from "@/assets/image/card-detail-star.png";

import { theme } from "@/styles/theme";

interface StarCardProps {
	title: string;
	subTitle: string;
	starNumber: number;
}

export default function StarCard({ title, subTitle, starNumber }: StarCardProps) {
	return (
		<li css={containerStyle}>
			<div css={imgStyle}>
				<img src="" alt="별자리" />
				<div css={starImgStyle}>
					<img src={starImg} alt="노란색 별" />
					<strong>{starNumber}</strong>
				</div>
			</div>
			<div css={titleStyle}>
				<strong>{subTitle}</strong>
				<h3>{title}</h3>
			</div>
		</li>
	);
}

const containerStyle = css`
	border: 1px solid ${theme.color.button_disabled};
	border-radius: 15px;
	width: 153px;
	height: 227px;
	overflow: hidden;
`;

const imgStyle = css`
	background-color: #d9d9d9;
	height: 140px; // 소수점 -> 세림님께 말하기
	position: relative;
`;

const starImgStyle = css`
	position: absolute;
	right: 6px;
	bottom: 6px;

	img {
		width: 40px;
		height: 36.32px;
	}

	strong {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		color: ${theme.color.font_black};
		${theme.font.body_b_bold}
	}
`;

const titleStyle = css`
	padding-top: 1rem;
	text-align: center;

	strong {
		color: ${theme.color.main_blue};
		${theme.font.body_c}
		margin-bottom: 2px;
	}

	h3 {
		${theme.font.head_b}
	}
`;
