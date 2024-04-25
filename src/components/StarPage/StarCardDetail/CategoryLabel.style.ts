import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const containerStyle = css`
	display: flex;
	flex-wrap: wrap;
	gap: 0.375rem;
`;

export const categoryLabelStyle = css`
	width: 4.9375rem;
	padding: 0.5rem 0;
	border-radius: 0.9375rem;
	${theme.font.body_c_bold};
	text-align: center;
	color: ${theme.color.main_blue};
	background-color: ${theme.color.main_light_blue};
`;
