import { css } from "@emotion/react";

import starImg from "@/assets/image/card-detail-star.png";

import { theme } from "@/styles/theme";

export default function StarCard() {
	return (
		<div css={containerStyle}>
			<div css={imgStyle}>
				<img src="" alt="별자리" />
				<img src={starImg} alt="노란색 별" css={starImgStyle} />
			</div>
			<div css={titleStyle}>
				<strong>육체 활동</strong>
				<h3>캐릭터 이름</h3>
			</div>
		</div>
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
	width: 40px;
	height: 36.32px;
	position: absolute;
	right: 6px;
	bottom: 6px;
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
