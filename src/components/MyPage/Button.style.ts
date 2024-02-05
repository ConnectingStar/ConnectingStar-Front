import { css } from "@emotion/react";

export const layoutStyle = css`
	display: flex;
	align-items: center;
	gap: 8px;
	width: 312px;
	border-radius: 15px;
	background-color: #f7f7fb;
	padding: 16px;
	position: relative;

	& > div {
		position: absolute;
		right: 18px;
	}
`;

export const textStyle = css`
	color: #111;
	font-weight: 700;
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const versionTextStyle = css`
	color: #0176f9;
	font-weight: 400;
`;
