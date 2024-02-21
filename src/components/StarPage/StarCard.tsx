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
	width: 9.5625rem;
	height: 14.1875rem;
	border: 1px solid ${theme.color.button_disabled};
	border-radius: 15px;
	overflow: hidden;
`;

const imgStyle = css`
	height: 8.6875rem;
	position: relative;
	background-color: #d9d9d9;
`;

const starImgStyle = css`
	position: absolute;
	right: 6px;
	bottom: 6px;

	img {
		width: 2.5rem;
		height: 2.27rem;
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
		margin-bottom: 0.125rem;
		${theme.font.body_c}
		color: ${theme.color.main_blue};
	}

	h3 {
		${theme.font.head_b}
	}
`;
