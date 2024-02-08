// TODO: Button 공통 컴포넌트 만들어지면 교체 예정

import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const buttonStyle = css`
	width: 100%;
	padding: 1rem 0;
	border-radius: 15px;
	${theme.font.button_big}
	color: #fff;
	background-color: ${theme.color.main_Blue};
`;
