import { css } from "@emotion/react";

export const layoutStyle = css`
	width: 360px;
	margin: 0 auto;
	padding: 14px 43px;

	& > ul {
		display: flex;
		align-items: center;
		gap: 54px;

		& > li {
			cursor: pointer;
		}
	}
`;
