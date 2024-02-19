import { css } from "@emotion/react";

export const layoutStyle = css`
	width: 360px;
	margin: 0 auto;
	padding: 1.25rem 1.5rem 0;
	font-family: "Noto Sans KR";
	display: flex;
	flex-direction: column;
	gap: 40px;
	align-items: center;
`;

export const characterBoxStyle = css`
	width: 312px;
	height: 312px;
	border-radius: 15px;
	background-color: #d9d9d9;
	position: relative;

	& > button {
		width: 124px;
		height: 55px;
		border-radius: 15px;
		border: 2px solid #0176f9;
		background-color: #fff;
		position: absolute;
		left: 5.875rem;
		bottom: 1.125rem;

		& > p {
			color: #0176f9;
			font-weight: 500;
			line-height: 24px;
		}
	}
`;

export const buttonBoxStyle = css`
	display: flex;
	flex-direction: column;
	gap: 12px;

	& > h3 {
		color: #767676;
		font-size: 0.875rem;
		font-weight: 700;
	}
`;
