import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const modifyModalStyle = {
	container: (props: { isModal: boolean }) => css`
		z-index: 5;
		position: fixed;
		display: ${props.isModal ? "flex" : "none"};
		align-items: center;
		justify-content: center;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.8);
		width: 100%;
		height: 100%;
	`,
	modalWrapper: css`
		position: absolute;
		display: flex;
		flex-direction: column;
		gap: 20px;
		z-index: 6;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 7.25rem;
		padding: 15px 15px 0px 15px;
		border-radius: 15px 15px 0px 0px;
		background-color: white;
	`,
	modalTitle: css`
		${theme.font.header}
	`,
	modalButton: css``,
};
