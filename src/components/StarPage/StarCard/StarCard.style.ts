import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const containerStyle = css`
	width: 9.5625rem;
	height: 14.1875rem;
	border-radius: 15px;
	position: relative;
	overflow: hidden;
	box-shadow: 0 0 0 1px ${theme.color.button_disabled} inset;
`;

export const imgStyle = css`
	height: 9.5625rem;
	position: relative;
`;

export const starImgStyle = css`
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

export const haveLabelStyle = css`
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

export const titleStyle = css`
	padding-top: 0.75rem;
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

export const selectedStyle = css`
	width: 9.5625rem;
	height: 14.1875rem;
	border-radius: 15px;
	position: absolute;
	top: 0;
	box-shadow: 0 0 0 4px ${theme.color.main_blue} inset;
`;
