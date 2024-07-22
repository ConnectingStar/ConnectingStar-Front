import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const layoutStyle = css`
	display: flex;
	flex-direction: column;
	width: 22.5rem;
	margin: 0 auto;
	padding: 4.75rem 1.5rem 5.438rem;
	gap: 40px;
	white-space: pre-wrap;
	${theme.font.body_a}

	h1 {
		${theme.font.head_a};
	}

	h2 {
		${theme.font.head_c};
		color: ${theme.color.font_gray};
	}

	& > div {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	& > div:nth-of-type(2) {
		& > div {
			display: flex;
			flex-direction: column;
			gap: 6px;
		}
	}

	& > div:last-of-type {
		& > p {
			padding: 1rem;
			background-color: ${theme.color.bg};
			border-radius: 15px;
			height: 11.875rem;
		}
	}
`;
