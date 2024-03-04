import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	width: 19.5rem;
	border-radius: 15px;
	background-color: ${theme.color.bg};
	position: relative;

	& > a {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 1rem;
	}
`;

export const textStyle = css`
	color: ${theme.color.font_black};
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 100%;
	${theme.font.body_a_bold};

	& .sub::before {
		content: "ㅣ";
		color: ${theme.color.main_blue};
	}
`;

export const getSubTextStyle = (isLogin: boolean) => {
	return css`
		color: ${isLogin === true ? theme.color.button_deactivated : theme.color.main_blue};
		font-weight: 400;
	`;
};
