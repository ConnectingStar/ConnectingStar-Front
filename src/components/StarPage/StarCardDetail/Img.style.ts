import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const imgStyle = css`
	height: 19.5rem;
	border-radius: 15px;
	margin-bottom: 1.25rem;
	position: relative;
	background-color: #d9d9d9;
	overflow: hidden;

	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&.selected {
		box-shadow: 0 0 0 5px ${theme.color.main_blue} inset;
	}
`;

export const labelStyle = css`
	width: 6.25rem;
	padding: 1rem 0;
	border-radius: 15px 0 15px 0;
	position: absolute;
	top: 0;
	${theme.font.body_a_bold}
	text-align: center;
	color: #fff;
	background-color: ${theme.color.main_deep_blue};
`;

export const starImgStyle = css`
	width: 3.75rem;
	height: 3.75rem;
	position: absolute;
	// 별 이미지 위치에 영향이 가서 px로 고정함
	bottom: 16px;
	right: 16px;

	img {
		width: 3.75rem;
		height: 3.75rem;
	}

	strong {
		position: absolute;
		top: 1.125rem;
		left: 1.125rem;
		font-size: 1.25rem;
		font-weight: 700;
		color: ${theme.color.font_black};
	}
`;
