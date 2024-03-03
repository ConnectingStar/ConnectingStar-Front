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
		& > li {
			flex: 1;
			display: flex;
			width: 100%;
			height: 100%;
			// 임시 배경색
			background-color: white;
			justify-content: center;
			align-items: center;
		}
	}
`;
