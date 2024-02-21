import { css } from "@emotion/react";

import starImg from "@/assets/image/card-detail-star.png";

import { theme } from "@/styles/theme";

// TODO: API 연결 후 삭제 or 수정 예정
interface StarCardProps {
	title: string;
	subTitle: string;
	starNumber: number;
	state: "default" | "selected" | "have";
}

export default function StarCard({ title, subTitle, starNumber, state }: StarCardProps) {
	return (
		<li css={containerStyle}>
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

const haveLabelStyle = css`
	width: 3.75rem;
	padding: 0.25rem 0;
	border-radius: 0 0 15px 0;
	position: absolute;
	top: 0;
	${theme.font.head_c};
	text-align: center;
	color: #fff;
	background-color: ${theme.color.main_deep_blue};
`;
