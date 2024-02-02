import { css } from "@emotion/react";

export const headerStyle = {
	container: css`
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 3.5rem;
		position: relative;
		width: 360px; // TODO: 세림님과 상의 필요
		margin: 0 auto;
		padding: 0 24px;
		background-color: #fff;
	`,
	title: css`
		font-size: 1.25rem;
		font-weight: 500;
	`,
	actionButton: css`
		font-weight: 500;
		color: #505050;
		background-color: transparent;
	`,
	titleLarge: css`
		font-size: 1.5rem;
	`,
};
