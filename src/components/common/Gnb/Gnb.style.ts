import { css } from "@emotion/react";

export const layoutStyle = css`
	width: 22.5rem;
	margin: 0 auto;
	padding: 0.875rem 2.6875rem;

	& > ul {
		display: flex;

		gap: 54px;
		width: 100%;
		height: 56px;

		align-items: center;
		gap: 54px;
		& > li {
			cursor: pointer;
		}
	}
`;
