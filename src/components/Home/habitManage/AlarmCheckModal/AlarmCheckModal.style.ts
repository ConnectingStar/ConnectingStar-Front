import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 0.9375rem;
	border-radius: 15px;
	width: 18rem;
	height: 18rem;
	background-color: white;
	white-space: pre-wrap;
	${theme.font.body_a};
	h1 {
		${theme.font.body_a_bold};
	}
	& > div:first-of-type {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
`;
