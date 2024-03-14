import { css } from "@emotion/react";

export const layoutStyle = css`
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	padding: 0.875rem 2.6875rem;
	background-color: #fff;

	& > ul {
		display: flex;
		align-items: center;
		justify-content: space-between;

		& > li {
			cursor: pointer;
		}
	}
`;
