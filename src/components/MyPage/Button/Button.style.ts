import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	align-items: center;
	gap: 8px;
	width: 19.5rem;
	border-radius: 15px;
	background-color: ${theme.color.bg};
	padding: 1rem;
	position: relative;

	& > div {
		position: absolute;
		right: 18px;
	}
`;

export const textStyle = css`
	color: #111;
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 100%;
	${theme.font.body_a_bold};
`;

export const getSubTextStyle = (isLogin: boolean) => {
	return css`
		color: ${isLogin === true ? theme.color.button_deactivated : theme.color.main_blue};
		font-weight: 400;
	`;
};
