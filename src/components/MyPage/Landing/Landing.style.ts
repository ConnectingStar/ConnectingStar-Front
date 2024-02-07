import { css } from "@emotion/react";

export const layoutStyle = css`
	width: 360px;
	margin: 0 auto;
	padding: 0.625rem 1.5rem 3rem;
	font-family: "Noto Sans KR";
`;

export const headingStyle = css`
	font-size: 1.5rem;
	font-weight: 500;
`;

export const profileBoxStyle = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	margin: 3.125rem 0 1.25rem;

	& > a {
		display: flex;

		& > p {
			font-size: 1.25rem;
			font-weight: 500;
		}
	}
`;

export const profileImgStyle = css`
	width: 100px;
	height: 100px;
	border-radius: 16px;
	background-color: #d9d9d9;
`;

export const buttonBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 12px;

	& > h3 {
		color: #767676;
		font-size: 0.875rem;
		font-weight: 700;
		margin-top: 2.5rem;
	}
`;
