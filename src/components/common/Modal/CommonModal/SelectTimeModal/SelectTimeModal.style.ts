import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	border-radius: 15px 15px 0 0;
	background-color: white;

	& > h1 {
		color: ${theme.color.font_black};
		${theme.font.header};
		padding: 1.125rem 1.5rem 0.625rem;
	}
`;

export const timeBoxStyle = css`
	display: flex;
	background-color: ${theme.color.bg};
	color: ${theme.color.font_black};
	${theme.font.time};
	gap: 80px;
	justify-content: center;

	& > div {
		display: flex;
	}

	& .timeBox {
		position: relative;
		gap: 60px;

		& > p {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -55%);
		}
	}
`;

export const footerBtnBoxStyle = css`
	padding: 1.125rem 1.5rem;
`;
