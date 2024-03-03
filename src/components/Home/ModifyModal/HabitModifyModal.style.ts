import { css } from "@emotion/react";

import { theme } from "@/styles/theme";

export const habitModifyModalStyle = {
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
};
