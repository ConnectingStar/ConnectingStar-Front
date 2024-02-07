import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	align-items: center;
	gap: 6px;
	padding: 0.4375rem 1.5rem 0;
	max-width: 360px;
	margin: 0 auto;
`;

export const sortButtonStyle = css`
	padding: 0.5rem 1rem;
	display: flex;
	align-items: center;
	gap: 4px;
	border-radius: 20px;
	border: 2px solid ${theme.color.button_disabled};

	& > p {
		color: ${theme.color.font_black};
		${theme.font.body_b};
	}

	& > svg {
		margin-top: 1px;
	}
`;

export const buttonStyle = css`
	padding: 0.5rem 1rem;
	border-radius: 20px;
	background-color: ${theme.color.main_deepBlue};
	color: #fff;
	${theme.font.body_b};
`;
