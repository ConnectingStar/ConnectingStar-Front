import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const SignUpStyle = css`
	height: 100vh;
	background-color: ${theme.color.bg};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > img {
		width: 12.5rem;
		height: 12.5rem;
		object-fit: cover;
		margin-bottom: 5rem;
		background-color: white;
	}

	& > pre {
		${theme.font.head_a};
		text-align: center;
		width: 100%;
		height: 4.375rem;
	}
`;
