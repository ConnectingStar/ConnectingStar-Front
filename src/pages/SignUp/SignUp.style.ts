import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const SignUpStyle = css`
	width: 22.5rem;
	margin: 0 auto;
	padding: 1.25rem 1.5rem 0;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > img {
		background-color: gray;
		width: 12.5rem;
		height: 12.5rem;
		object-fit: cover;
		margin-bottom: 5rem;
	}

	& > pre {
		${theme.font.head_a};
		text-align: center;
		width: 100%;
		height: 4.375rem;
	}
`;
