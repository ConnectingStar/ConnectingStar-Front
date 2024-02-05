import { css } from "@emotion/react";

export const layoutStyle = css`
	width: 360px;
	margin: 0 auto;
	padding: 10px 24px 48px;
	font-family: "Noto Sans KR";
`;

export const headingStyle = css`
	font-size: 24px;
	font-weight: 500;
`;

export const profileBoxStyle = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	margin: 50px 0 20px;

	& > a {
		display: flex;

		& > p {
			font-size: 20px;
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
		font-size: 14px;
		font-weight: 700;
		margin-top: 40px;
	}
`;
