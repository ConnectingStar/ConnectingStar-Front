import { css } from "@emotion/react";

export const homeStyle = {
	container: css`
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		min-width: 100%;
		background-color: white;
	`,
	innerWrapper: css`
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 1.5rem;
		gap: 1.25rem;
	`,
};
