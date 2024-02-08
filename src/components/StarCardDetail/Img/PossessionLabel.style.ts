import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const possessionLabelStyle = css`
	width: 6.25rem;
	padding: 1rem 0;
	border-radius: 15px 0 15px 0;
	position: absolute;
	top: 0;
	${theme.font.body_a_bold}
	text-align: center;
	color: #fff;
	background-color: ${theme.color.main_deepBlue};
`;
