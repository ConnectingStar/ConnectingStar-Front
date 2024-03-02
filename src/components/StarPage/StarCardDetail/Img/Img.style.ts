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
