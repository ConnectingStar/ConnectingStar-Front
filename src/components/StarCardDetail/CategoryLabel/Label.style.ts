import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const labelStyle = css`
	width: 4.9375rem; // TODO: 세림님과 상의 필요(텍스트 길이와 상관없이 가로 길이는 항상 동일한지?)
	padding: 0.5rem 0;
	border-radius: 0.9375rem;
	${theme.font.body_c_bold};
	text-align: center;
	color: ${theme.color.main_Blue};
	background-color: ${theme.color.main_lightBlue};
`;
