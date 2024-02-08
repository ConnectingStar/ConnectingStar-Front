import { css } from "@emotion/react";

// TODO: 추후 theme font & color로 변경
export const headerStyle = {
	container: css`
		display: flex;
		align-items: center;
		justify-content: center;
		width: 360px; // TODO: 세림님과 상의 필요
		height: 3.5rem;
		padding: 0 24px;
		margin: 0 auto;
		position: relative;
		background-color: #fff;
	`,
	title: css`
		font-size: 1.25rem;
		font-weight: 500;
	`,
	iconButton: css`
		position: absolute;
		left: 1.5rem;
	`,
	textButton: css`
		position: absolute;
		right: 1.5rem;
		font-weight: 500;
		color: #505050;
		background-color: transparent;
	`,
	titleLarge: css`
		margin-right: auto;
		font-size: 1.5rem;
		font-weight: 500;
	`,
};
